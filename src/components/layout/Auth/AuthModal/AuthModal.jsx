import PropTypes from "prop-types";
import Modal from "../../Modal/Modal";
import "./AuthModal.css";

function AuthModal({ className, children }) {
	return <Modal className={`authModal${className ? ` ${className}` : ""}`}>{children}</Modal>;
}

AuthModal.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default AuthModal;
