import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModalClose.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ModalClose({ className, ...rest }) {
	return (
		<button type="button" className={`modalClose${className ? ` ${className}` : ""}`} {...rest}>
			<FontAwesomeIcon icon={faClose} />
		</button>
	);
}

export default ModalClose;
