import PropTypes from "prop-types";
import "./AuthTitle.css";

function AuthTitle({ className, children }) {
	return <h1 className={`authTitle${className ? ` ${className}` : ""}`}>{children}</h1>;
}

AuthTitle.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default AuthTitle;
