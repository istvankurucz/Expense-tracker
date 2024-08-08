import PropTypes from "prop-types";
import "./ShadowBox.css";

function ShadowBox({ size = "0.5rem", color = "var(--info-color)", className = "", children }) {
	return (
		<div
			style={{ "--size": size, "--color": color }}
			className={`shadowBox${className !== "" ? ` ${className}` : ""}`}
		>
			{children}
		</div>
	);
}

ShadowBox.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default ShadowBox;
