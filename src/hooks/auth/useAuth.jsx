import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../config/firebase/firebase";
import { useStateValue } from "../../contexts/Context API/StateProvider";

function useAuth() {
	const [, dispatch] = useStateValue();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			console.log("User from auth:", user);

			dispatch({
				type: "SET_USER",
				user,
			});
		});

		return unsub;
	}, []);
}

export default useAuth;
