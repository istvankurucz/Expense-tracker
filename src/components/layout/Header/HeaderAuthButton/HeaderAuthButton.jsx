import { Link } from "react-router-dom";
import { useStateValue } from "../../../../contexts/Context API/StateProvider";
import signOutUser from "../../../../utils/user/signOutUser";
import "./HeaderAuthButton.css";

function HeaderAuthButton() {
	const [{ user }] = useStateValue();

	if (user == null) {
		return (
			<Link to="/signin" className="headerAuthButton headerAuthButton--accent">
				Bejelentkezés
			</Link>
		);
	}

	return (
		<Link to="" className="headerAuthButton headerAuthButton--danger" onClick={signOutUser}>
			Kijelentkezés
		</Link>
	);
}

export default HeaderAuthButton;
