import PropTypes from "prop-types";
import Page from "../Page/Page";
import "./LoadingFrame.css";

function LoadingFrame({ loading, loadingElement, error, errorElement, children }) {
	// Loading state
	if (loading) return loadingElement;

	// Error state
	if (error) return <Page>{errorElement}</Page>;

	// Normal
	return children;
}

LoadingFrame.propTypes = {
	loading: PropTypes.bool.isRequired,
	loadingElement: PropTypes.node.isRequired,
	error: PropTypes.bool.isRequired,
	errorElement: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
};

export default LoadingFrame;
