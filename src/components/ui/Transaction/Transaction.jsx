import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import CategoryIcon from "../CategoryIcon/CategoryIcon";
import formatPrice from "../../../utils/format/formatPrice";
import "./Transaction.css";
import Tooltip from "../Tooltip/Tooltip";

function Transaction({ category, type, date, group, user, name, amount, comment = "" }) {
	// States
	const [showComment, setShowComment] = useState(false);

	// Variables
	const sign = type === "expense" ? "-" : type === "income" ? "+" : "";

	return (
		<div className={`transaction transaction--${type} transaction--${category}`}>
			<CategoryIcon category={category} />

			<span className="transaction__date">{date}</span>

			<div className="transaction__body">
				{group != null && (
					<div className="transaction__body__top">
						<Link to="/" className="transaction__group">
							{group}
						</Link>
						{" - "}
						<span className="transaction__user">{user?.name}</span>
					</div>
				)}

				<div className="transaction__name">
					<p className="transaction__name__text">{name}</p>

					{comment !== "" && (
						<div
							className="transaction__comment"
							onMouseEnter={() => setShowComment(true)}
							onMouseLeave={() => setShowComment(false)}
						>
							<FontAwesomeIcon icon={faComment} className="transaction__hasComment" />

							<Tooltip show={showComment} variant="dark">
								<p className="transaction__comment__text">{comment}</p>
							</Tooltip>
						</div>
					)}
				</div>
			</div>

			<div className="transaction__amount">
				{sign}
				{formatPrice(amount)}
			</div>
		</div>
	);
}

Transaction.propTypes = {
	category: PropTypes.object.isRequired,
	type: PropTypes.oneOf(["income", "expense"]),
	date: PropTypes.string.isRequired,
	group: PropTypes.string,
	user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	name: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	comment: PropTypes.string,
};

export default Transaction;
