import { forwardRef, useState } from "react";
import "./Input.css";
import Button from "../../ui/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Input = forwardRef(
	(
		{
			direction = "vertical",
			variant = "accent",
			label,
			type = "text",
			id,
			fullW,
			centered,
			className,
			...rest
		},
		ref
	) => {
		const [showPassword, setShowPassword] = useState(false);

		return (
			<div
				className={`input input--${variant} input--${direction}${fullW ? " input--full" : ""}${
					centered ? " input--centered" : ""
				}${className ? ` ${className}` : ""}`}>
				<label htmlFor={id} className="input__label">
					{label}
					{rest.required && <span className="input__required">*</span>}
				</label>

				<div className="input__main">
					<input
						type={type === "password" && showPassword ? "text" : type}
						id={id}
						ref={ref}
						{...rest}
						className="input__input"
					/>
					{type === "password" && (
						<Button
							variant="transparent"
							icon
							className="input__showPw"
							onClick={() => setShowPassword((show) => !show)}>
							<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
						</Button>
					)}
				</div>
			</div>
		);
	}
);

export default Input;
