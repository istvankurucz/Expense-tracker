import { useState } from "react";
import PropTypes from "prop-types";
import CategorySelectOption from "./CategorySelectOption/CategorySelectOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import RequiredIcon from "../../RequiredIcon/RequiredIcon";
import handleSelectBlur from "../../../../utils/form/handleSelectBlur";
import "./CategorySelect.css";

function CategorySelect({ items, index, setIndex, id, className = "" }) {
	// States
	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className={`categorySelect${className !== "" ? ` ${className}` : ""}`}>
			<label htmlFor={id} className="categorySelect__label">
				Kategória
				<RequiredIcon />
			</label>

			<button
				type="button"
				style={{
					"--_text-color": items[index].colors.text,
					"--bg-color": items[index].colors.bg,
				}}
				className="categorySelect__selected"
				onFocus={() => setShowOptions(true)}
				onBlur={() => handleSelectBlur(setShowOptions)}
			>
				<CategorySelect.Option category={items[index]} />
				<FontAwesomeIcon icon={faAngleDown} />
			</button>

			{showOptions && (
				<ul className="categorySelect__options scrollbar">
					{items.map((category, i) => (
						<li key={category.name} onClick={() => setIndex(i)}>
							<CategorySelect.Option category={category} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

CategorySelect.proptypes = {
	items: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	setIndex: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
};

CategorySelect.Option = CategorySelectOption;

export default CategorySelect;
