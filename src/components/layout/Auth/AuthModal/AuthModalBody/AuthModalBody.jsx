import PropTypes from "prop-types";
import Modal from "../../../Modal/Modal";
import "./AuthModalBody.css";

function AuthModalBody({ className, children }) {
	return (
		<Modal.Body className={`authModalBody${className ? ` ${className}` : ""}`}>
			{children}
		</Modal.Body>
	);
}

AuthModalBody.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default AuthModalBody;
