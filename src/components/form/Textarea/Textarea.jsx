import PropTypes from "prop-types";
import { forwardRef } from "react";
import RequiredIcon from "../RequiredIcon/RequiredIcon";
import "./Textarea.css";

const Textarea = forwardRef(
	({ variant = "accent", label, id, fullW, className = "", ...rest }, ref) => {
		return (
			<div
				className={`textarea textarea--${variant}${fullW ? " textarea--full" : ""}${
					className !== "" ? ` ${className}` : ""
				}`}
			>
				<label htmlFor={id} className="textarea__label">
					{label}
					{rest.required && <RequiredIcon />}
				</label>
				<textarea id={id} className="textarea__input" ref={ref} {...rest}></textarea>
			</div>
		);
	}
);

Textarea.displayName = "Textarea";
Textarea.propTypes = {
	variant: PropTypes.oneOf(["accent", "success", "danger"]),
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	fullW: PropTypes.bool,
	className: PropTypes.string,
};

export default Textarea;
