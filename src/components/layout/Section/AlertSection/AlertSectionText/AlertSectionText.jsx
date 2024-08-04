import PropTypes from "prop-types";
import "./AlertSectionText.css";

function AlertSectionText({ className, children }) {
	return <div className={`alertSectionText${className ? ` ${className}` : ""}`}>{children}</div>;
}

AlertSectionText.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default AlertSectionText;
