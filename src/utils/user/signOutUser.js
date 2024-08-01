import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase/firebase";

export default async function signOutUser() {
	try {
		await signOut(auth);
	} catch (e) {
		console.log("Error signing out the user.", e);
	}
}
