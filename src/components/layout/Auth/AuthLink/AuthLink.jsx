import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./AuthLink.css";

function AuthLink({ to, replace = false, className, children }) {
	return (
		<Link to={to} replace={replace} className={`authLink${className ? ` ${className}` : ""}`}>
			{children}
		</Link>
	);
}

AuthLink.propTypes = {
	to: PropTypes.string.isRequired,
	replace: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default AuthLink;
