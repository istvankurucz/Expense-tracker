import Modal from "../../Modal/Modal";
import "./AuthModal.css";

function AuthModal({ className, children }) {
	return <Modal className={`authModal${className ? ` ${className}` : ""}`}>{children}</Modal>;
}

export default AuthModal;
