import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import "./Brand.css";

function Brand() {
	return (
		<Link to="/" className="brand">
			<FontAwesomeIcon icon={faChartColumn} className="brand__icon" />
			<span className="brand__name">Brand name</span>
		</Link>
	);
}

export default Brand;
