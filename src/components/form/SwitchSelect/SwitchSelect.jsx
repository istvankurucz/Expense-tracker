import PropTypes from "prop-types";
import "./SwitchSelect.css";

function SwitchSelect({ items = [], index, setIndex, className = "" }) {
	return (
		<div className={`switchSelect${className !== "" ? ` ${className}` : ""}`}>
			<ul className="switchSelect__container">
				{items.map((item, i) => (
					<li key={i}>
						<button
							type="button"
							className={`switchSelect__item${
								index === i ? " switchSelect__item--active" : ""
							}`}
							onClick={() => setIndex(i)}
						>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

SwitchSelect.propTypes = {
	items: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	setIndex: PropTypes.func.isRequired,
	className: PropTypes.string,
};

export default SwitchSelect;
