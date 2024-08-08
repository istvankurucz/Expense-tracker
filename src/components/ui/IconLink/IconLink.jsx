import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./IconLink.css";

function IconLink({ to, className, children }) {
	return (
		<Link to={to} className={`iconLink${className !== "" ? ` ${className}` : ""}`}>
			{children}
		</Link>
	);
}

IconLink.proptypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default IconLink;
