import PropTypes from "prop-types";
import "./ChartPie.css";

function ChartPie({ variant, fromDegree, degree, showCaption = true, name, value }) {
	return (
		<div
			style={{ "--from-degree": `${fromDegree}deg`, "--degree": `${degree}deg` }}
			className={`chartPie chartPie--${variant}`}>
			{showCaption && (
				<div className="chartPie__info">
					<div className="chartPie__name">{name}</div>
					<div className="chartPie__name">{value}</div>
				</div>
			)}
		</div>
	);
}

ChartPie.propTypes = {
	variant: PropTypes.oneOf([
		"category-salary",
		"category-interest",
		"category-food",
		"category-entertainment",
		"category-health",
		"category-housing",
		"category-utilities",
		"category-transportation",
		"category-clothing",
		"category-education",
		"category-other",
	]),
	fromDegree: PropTypes.number.isRequired,
	degree: PropTypes.number.isRequired,
	showCaption: PropTypes.bool,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default ChartPie;
