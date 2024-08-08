import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./IconLink.css";

function IconLink({ to, className = "", onClick, children }) {
	return (
		<Link
			to={to}
			className={`iconLink${className !== "" ? ` ${className}` : ""}`}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}

IconLink.proptypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default IconLink;
