import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./ModalClose.css";

function ModalClose({ className, ...rest }) {
	return (
		<button type="button" className={`modalClose${className ? ` ${className}` : ""}`} {...rest}>
			<FontAwesomeIcon icon={faClose} />
		</button>
	);
}

ModalClose.propTypes = {
	className: PropTypes.string,
};

export default ModalClose;
