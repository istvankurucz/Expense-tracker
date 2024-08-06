import PropTypes from "prop-types";
import { forwardRef } from "react";
import RequiredIcon from "../RequiredIcon/RequiredIcon";
import "./Checkbox.css";

const Checkbox = forwardRef(({ variant = "accent", label, id, className, ...rest }, ref) => {
	return (
		<label
			htmlFor={id}
			className={`checkbox checkbox--${variant}${className ? ` ${className}` : ""}`}>
			<input type="checkbox" id={id} ref={ref} className="checkbox__input" {...rest} />
			<span className="checkbox__marker"></span>
			<span className="checkbox__label">
				{label}
				{rest.required && <RequiredIcon />}
			</span>
		</label>
	);
});

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
	variant: PropTypes.oneOf(["accent"]),
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Checkbox;
