import PropTypes from "prop-types";
import "./TabSelect.css";

function TabSelect({ items = [], index, setIndex, className }) {
	return (
		<ul className={`tabSelect${className ? ` ${className}` : ""}`}>
			{items.map((item, i) => (
				<li
					key={i}
					className={`tabSelect__item${index === i ? " tabSelect__item--active" : ""}`}
					onClick={() => setIndex(i)}>
					{item}
				</li>
			))}
		</ul>
	);
}

TabSelect.propTypes = {
	items: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	setIndex: PropTypes.func.isRequired,
	className: PropTypes.string,
};

export default TabSelect;
