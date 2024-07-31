import { forwardRef } from "react";
import "./Button.css";

const Button = forwardRef(
	(
		{
			type = "button",
			variant = "accent",
			outlined,
			round,
			fullW,
			centered,
			icon,
			className,
			children,
			...rest
		},
		ref
	) => {
		return (
			<button
				type={type}
				className={`button button--${variant}${outlined ? " button--outlined" : ""}${
					round ? " button--round" : ""
				}${fullW ? " button--full" : ""}${centered ? " button--centered" : ""}${
					icon ? " button--icon" : ""
				}${className ? ` ${className}` : ""}`}
				ref={ref}
				{...rest}>
				{children}
			</button>
		);
	}
);

export default Button;
