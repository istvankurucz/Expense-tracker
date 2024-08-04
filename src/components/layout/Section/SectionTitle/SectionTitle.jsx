import PropTypes from "prop-types";
import "./SectionTitle.css";

function SectionTitle({ className, children }) {
	return <h3 className={`sectionTitle${className ? ` ${className}` : ""}`}>{children}</h3>;
}

SectionTitle.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default SectionTitle;
