import PropTypes from "prop-types";
import ChartBar from "./ChartBar/ChartBar";
import ChartPie from "./ChartPie/ChartPie";
import "./Chart.css";

function Chart({ type, justify = "center", size = "16rem", offset = "3rem", children }) {
	return (
		<div
			style={{ "--justify": justify, "--size": size, "--offset": offset }}
			className={`chart chart--${type} scrollbar`}>
			<div className={`chart__container chart__container--${type}`}>{children}</div>
		</div>
	);
}

Chart.propTypes = {
	type: PropTypes.oneOf(["bar", "pie"]),
	justify: PropTypes.string,
	size: PropTypes.string,
	offset: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Chart.Bar = ChartBar;
Chart.Pie = ChartPie;

export default Chart;
