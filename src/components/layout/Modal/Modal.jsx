import ModalBody from "./ModalBody";
import ModalClose from "./ModalClose";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import "./Modal.css";

function Modal({ className, children }) {
	return <div className={`modal${className ? ` ${className}` : ""}`}>{children}</div>;
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Close = ModalClose;

export default Modal;
