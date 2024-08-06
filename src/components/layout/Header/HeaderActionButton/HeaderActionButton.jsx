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
				<Button centered outlined tabIndex={-1} className="headerActionButton__button">
					Bejelentkezés
				</Button>
			</Link>
		);
	}

	return (
		<Link to="/new-transaction" className="headerActionButton">
			<Button centered tabIndex={-1} className="headerActionButton__button">
				<FontAwesomeIcon icon={faPlus} />
				Új
			</Button>
		</Link>
	);
}

export default HeaderActionButton;
