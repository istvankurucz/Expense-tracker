import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import handleSelectBlur from "../../../utils/form/handleSelectBlur";
import "./Select.css";
import RequiredIcon from "../RequiredIcon/RequiredIcon";

function Select({ label, id, items, index, setIndex, required, className = "" }) {
	// States
	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className={`select${className !== "" ? ` ${className}` : ""}`}>
			<label htmlFor={id} className="select__label">
				{label}
				{required && <RequiredIcon />}
			</label>

			<button
				type="button"
				className="select__selected"
				onFocus={() => setShowOptions(true)}
				onBlur={() => handleSelectBlur(setShowOptions)}
			>
				{items[index]}
				<FontAwesomeIcon icon={faAngleDown} />
			</button>

			{showOptions && (
				<ul className="select__options">
					{items.map((item, i) => (
						<li key={i} onClick={() => setIndex(i)}>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

Select.proptypes = {
	items: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	setIndex: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool,
	className: PropTypes.string,
};

export default Select;
