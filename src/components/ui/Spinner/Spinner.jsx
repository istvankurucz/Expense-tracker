import PropTypes from "prop-types";
import "./Spinner.css";

function Spinner({ size = "1rem", variant = "accent", text = "", className }) {
	return (
		<div className={`spinner spinner--${variant}${className ? ` ${className}` : ""}`}>
			<span style={{ "--size": size }} className="spinner__shape"></span>
			{text !== "" && <span className="spinner__text">{text}</span>}
		</div>
	);
}

Spinner.propTypes = {
	size: PropTypes.string,
	variant: PropTypes.oneOf(["primary", "secondary", "info", "accent", "text"]),
	text: PropTypes.string,
	className: PropTypes.string,
};

export default Spinner;
