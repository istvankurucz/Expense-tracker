import PropTypes from "prop-types";
import usePageMinHeight from "../../../hooks/dom/usePageMinHeight";
import "./Page.css";

function Page({ className, children }) {
	const minHeightString = usePageMinHeight();

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
