import { useEffect, useState } from "react";
import { useStateValue } from "../../contexts/Context API/StateProvider";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";

function useGroups() {
	const [{ user }] = useStateValue();
	const [groups, setGroups] = useState([]);
	const [groupLoading, setGroupsLoading] = useState(false);

	useEffect(() => {
		async function fetchGroups() {
			setGroupsLoading(true);

			try {
				const groupsRef = collection(db, "groups");
				const userRef = doc(db, "users", user.uid);
				const q = query(groupsRef, where("members", "array-contains", userRef));
				const res = await getDocs(q);

				const data = res.docs.map((group) => ({
					id: group.id,
					...group.data(),
				}));
				setGroups(data);

				setGroupsLoading(false);
			} catch (e) {
				console.log("Error fething the groups.", e);
				setGroupsLoading(false);
			}
		}

		if (user == null) return;

		fetchGroups();
	}, [user]);

	return { groups, groupLoading };
}

export default useGroups;
