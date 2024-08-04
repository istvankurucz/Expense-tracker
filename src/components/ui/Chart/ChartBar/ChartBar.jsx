import PropTypes from "prop-types";
import "./ChartBar.css";

function ChartBar({ variant = "success", width = "5rem", height, name, value }) {
	return (
		<div className={`chartBar chartBar--${variant}`}>
			<div
				data-value={value}
				style={{ "--bar-width": width, "--bar-height": `${height}%` }}
				className="chartBar__bar"></div>
			<div className="chartBar__name">{name}</div>
		</div>
	);
}

ChartBar.propTypes = {
	variant: PropTypes.oneOf(["success", "danger"]),
	width: PropTypes.string,
	height: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default ChartBar;
