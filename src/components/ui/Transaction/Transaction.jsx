import PropTypes from "prop-types";
import CategoryIcon from "../CategoryIcon/CategoryIcon";
import "./Transaction.css";
import { Link } from "react-router-dom";

function Transaction({ category, type, date, group, user, name, amount }) {
	return (
		<div className={`transaction transaction--${type} transaction--${category}`}>
			<CategoryIcon category={category} />

			<span className="transaction__date">{date}</span>

			<div className="transaction__body">
				<div className="transaction__body__top">
					{group != null && (
						<Link to="/" className="transaction__group">
							{group}
						</Link>
					)}
					{" - "}
					<span className="transaction__user">{user}</span>
				</div>

				<div className="transaction__name">{name}</div>
			</div>

			<div className="transaction__amount">{amount}</div>
		</div>
	);
}

Transaction.propTypes = {
	category: PropTypes.object.isRequired,
	type: PropTypes.oneOf(["income", "expense"]),
	date: PropTypes.string.isRequired,
	group: PropTypes.string,
	user: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
};

export default Transaction;
