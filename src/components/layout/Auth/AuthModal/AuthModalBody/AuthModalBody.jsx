import Modal from "../../../Modal/Modal";
import "./AuthModalBody.css";

function AuthModalBody({ className, children }) {
	return (
		<Modal.Body className={`authModalBody${className ? ` ${className}` : ""}`}>
			{children}
		</Modal.Body>
	);
}

export default AuthModalBody;
