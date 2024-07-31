import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(
	({ variant = "accent", label, type = "text", id, className, ...rest }, ref) => {
		return (
			<div className={`input${className ? ` ${className}` : ""}`}>
				<label htmlFor={id} className="input__label">
					{label}
					<span className="input__required">*</span>
				</label>
				<input type={type} id={id} ref={ref} {...rest} />
			</div>
		);
	}
);

export default Input;
