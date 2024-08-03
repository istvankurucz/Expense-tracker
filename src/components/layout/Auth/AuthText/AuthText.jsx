import PropTypes from "prop-types";
import "./AuthText.css";

function AuthText({ type = "normal", centered, className, children }) {
	return (
		<p
			className={`authText authText--${type}${centered ? " authText--centered" : ""}${
				className ? ` ${className}` : ""
			}`}>
			{children}
		</p>
	);
}

AuthText.propTypes = {
	type: PropTypes.oneOf(["normal", "action"]),
	centered: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default AuthText;
