import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../config/firebase/firebase";
import { useStateValue } from "../../contexts/Context API/StateProvider";

function useAuth() {
	const [, dispatch] = useStateValue();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			console.log("User from auth:", user);

			// Set the user in the context
			dispatch({
				type: "SET_USER",
				user,
			});

			// Set user loading to false
			dispatch({
				type: "SET_USER_LOADING",
				userLoading: false,
			});
		});

		return unsub;
	}, [dispatch]);
}

export default useAuth;
