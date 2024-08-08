import { useStateValue } from "../../../../contexts/Context API/StateProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import signOutUser from "../../../../utils/user/signOutUser";
import IconLink from "../../../ui/IconLink/IconLink";
import "./HeaderAuthButton.css";

function HeaderAuthButton() {
	const [{ user }] = useStateValue();

	if (user == null) {
		return (
			<IconLink to="/signin" className="headerAuthButton headerAuthButton--accent">
				<FontAwesomeIcon icon={faArrowRightToBracket} />
				Bejelentkezés
			</IconLink>
		);
	}

	return (
		<IconLink to="" className="headerAuthButton headerAuthButton--danger" onClick={signOutUser}>
			<FontAwesomeIcon icon={faArrowRightFromBracket} />
			Kijelentkezés
		</IconLink>
	);
}

export default HeaderAuthButton;
