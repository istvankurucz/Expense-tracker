import PropTypes from "prop-types";
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

Button.displayName = "Button";
Button.propTypes = {
	type: PropTypes.string,
	variant: PropTypes.oneOf([
		"primary",
		"secondary",
		"accent",
		"success",
		"danger",
		"info",
		"transparent",
	]),
	outlined: PropTypes.bool,
	round: PropTypes.bool,
	fullW: PropTypes.bool,
	centered: PropTypes.bool,
	icon: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Button;
