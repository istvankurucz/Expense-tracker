import PropTypes from "prop-types";
import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

function Chart({ children }) {
	return <div className="chart scrollbar">{children}</div>;
}

Chart.propTypes = {
	children: PropTypes.node.isRequired,
};

Chart.Bar = ChartBar;

export default Chart;
