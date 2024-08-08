import PropTypes from "prop-types";
import "./Tooltip.css";

function Tooltip({ show, variant = "dark", className = "", children }) {
	return (
		<div
			className={`tooltip tooltip--${variant}${show ? " tooltip--show" : ""}${
				className !== "" ? ` ${className}` : ""
			}`}
		>
			{children}
		</div>
	);
}

Tooltip.propTypes = {
	show: PropTypes.bool.isRequired,
	variant: PropTypes.oneOf(["dark"]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Tooltip;
