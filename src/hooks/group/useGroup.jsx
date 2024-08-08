import { useEffect, useState } from "react";
import { useStateValue } from "../../contexts/Context API/StateProvider";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import checkIfUserIsInGroup from "../../utils/group/checkIfUserIsInGroup";
import checkIfAdmin from "../../utils/group/checkIfAdmin";

function useGroup() {
	// States
	const [{ user }] = useStateValue();
	const [group, setGroup] = useState(null);
	const [groupLoading, setGroupLoading] = useState(false);
	const { groupId } = useParams();

	useEffect(() => {
		async function fetchGroup() {
			setGroupLoading(true);

			try {
				// Get the group from DB
				const groupRef = doc(db, "groups", groupId);
				const group = await getDoc(groupRef);

				// Check is th group exists
				if (!group.exists()) throw new Error("group-does-not-exist");

				// Check if the user is in the group
				if (!checkIfUserIsInGroup(group.data().members, user.uid)) {
					throw new Error("user-is-not-in-group");
				}

				const data = {
					id: group.id,
					isAdmin: checkIfAdmin(group.data().roles, user.uid),
					...group.data(),
				};
				setGroup(data);

				setGroupLoading(false);
			} catch (e) {
				console.log("Error fetching the group.", e);
				setGroupLoading(false);
			}
		}

		if (user == null || groupId == undefined) return;

		fetchGroup();
	}, [groupId, user]);

	return { group, groupLoading };
}

export default useGroup;
