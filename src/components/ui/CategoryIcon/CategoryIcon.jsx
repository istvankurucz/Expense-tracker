import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CategoryIcon.css";

function CategoryIcon({ category, className }) {
	return (
		<div
			title={category.text}
			style={{ "--_text-color": category.colors.text, "--bg-color": category.colors.bg }}
			className={`categoryIcon${className ? ` ${className}` : ""}`}
		>
			<FontAwesomeIcon icon={category.icon} />
		</div>
	);
}

CategoryIcon.propTypes = {
	category: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default CategoryIcon;
