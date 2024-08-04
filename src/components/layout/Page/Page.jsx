import PropTypes from "prop-types";
import "./Page.css";
import calcPageMinHeight from "../../../utils/general/calcPageMinHeight";

function Page({ className, children }) {
	const minHeightString = calcPageMinHeight();

	return (
		<main
			style={{ "--min-height": minHeightString }}
			className={`page${className ? ` ${className}` : ""}`}>
			{children}
		</main>
	);
}

Page.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Page;
