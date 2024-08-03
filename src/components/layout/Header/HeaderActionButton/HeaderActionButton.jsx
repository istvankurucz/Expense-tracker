import { Link } from "react-router-dom";
import { useStateValue } from "../../../../contexts/Context API/StateProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../ui/Button/Button";
import "./HeaderActionButton.css";

function HeaderActionButton() {
	const [{ user }] = useStateValue();

	if (user == null) {
		return (
			<Link to="/signin" className="headerActionButton">
				<Button outlined tabIndex={-1}>
					Bejelentkezés
				</Button>
			</Link>
		);
	}

	return (
		<Link to="/" className="headerActionButton">
			<Button tabIndex={-1}>
				<FontAwesomeIcon icon={faPlus} />
				Új esemény
			</Button>
		</Link>
	);
}

export default HeaderActionButton;
