import PropTypes from "prop-types";
import "./ModalFooter.css";

function ModalFooter({ className, children }) {
	return <footer className={`modalFooter${className ? ` ${className}` : ""}`}>{children}</footer>;
}

ModalFooter.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default ModalFooter;
