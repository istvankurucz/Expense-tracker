import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../../../contexts/Context API/StateProvider";
import Button from "../Button/Button";
import "./Feedback.css";

function Feedback({ time = 10, className }) {
	const [{ feedback }, dispatch] = useStateValue();

	// Function to hide the feedback and reset its values
	const closeFeedback = useCallback(() => {
		// Slide up the component
		dispatch({
			type: "SET_FEEDBACK",
			feedback: {
				...feedback,
				show: false,
			},
		});

		// After it has disappeared reset its values
		setTimeout(() => {
			dispatch({
				type: "SET_FEEDBACK",
				feedback: {
					show: false,
					type: "",
					message: "",
					details: "",
				},
			});
		}, 200);
	}, [dispatch, feedback]);

	// useEffect to automatically close the feedback after a certain time
	useEffect(() => {
		if (feedback.show) {
			const timer = setTimeout(closeFeedback, time * 1000);

			return () => clearTimeout(timer);
		}
	}, [closeFeedback, feedback.show, time]);

	return (
		<div
			className={`feedback feedback--${feedback.type}${feedback.show ? " feedback--show" : ""}${
				className ? ` ${className}` : ""
			}`}>
			<header className="feedback__header">
				<h3 className="feedback__title">{feedback.message}</h3>
				<Button
					variant="transparent"
					icon
					round
					className="feedback__close"
					onClick={closeFeedback}>
					<FontAwesomeIcon icon={faClose} />
				</Button>
			</header>

			{feedback.details !== "" && <p className="feedback__details">{feedback.details}</p>}
		</div>
	);
}

Feedback.propTypes = {
	time: PropTypes.number,
	className: PropTypes.string,
};

export default Feedback;
