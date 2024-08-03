import PropTypes from "prop-types";
import "./ModalHeader.css";

function ModalHeader({ className, children }) {
	return <header className={`modalHeader${className ? ` ${className}` : ""}`}>{children}</header>;
}

ModalHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default ModalHeader;
