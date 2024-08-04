import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../../../ui/Button/Button";
import "./AlertSectionButton.css";

function AlertSectionButton({ link, className, children }) {
	return (
		<Link to={link} className={`alertSectionButton${className ? ` ${className}` : ""}`}>
			<Button tabIndex={-1}>{children}</Button>
		</Link>
	);
}

AlertSectionButton.propTypes = {
	link: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default AlertSectionButton;
