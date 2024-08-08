import PropTypes from "prop-types";
import "./FormButtons.css";

function FormButtons({ className = "", children }) {
	return <div className={`formButtons${className !== "" ? ` ${className}` : ""}`}>{children}</div>;
}

FormButtons.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default FormButtons;
