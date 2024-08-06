import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import "./NewTransactionButton.css";

function NewTransactionButton({ className }) {
	return (
		<Link
			to="/new-transaction"
			className={`newTransactionButton${className ? ` ${className}` : ""}`}>
			<Button icon round className="newTransactionButton__button">
				<FontAwesomeIcon icon={faPlus} />
			</Button>
		</Link>
	);
}

NewTransactionButton.propTypes = {
	className: PropTypes.string,
};

export default NewTransactionButton;
