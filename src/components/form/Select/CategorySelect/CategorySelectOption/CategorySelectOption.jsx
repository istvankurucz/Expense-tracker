import PropTypes from "prop-types";
import CategoryIcon from "../../../../ui/CategoryIcon/CategoryIcon";
import "./CategorySelectOption.css";

function CategorySelectOption({ category, className = "" }) {
	return (
		<div
			style={{ "--_text-color": category.colors.text, "--bg-color": category.colors.bg }}
			className={`categorySelectOption${className !== "" ? ` ${className}` : ""}`}
		>
			<CategoryIcon category={category} />
			<span className="categorySelectOption__text">{category.text}</span>
		</div>
	);
}

CategorySelectOption.propTypes = {
	category: PropTypes.object.isRequired,
	className: PropTypes.string,
};

export default CategorySelectOption;
