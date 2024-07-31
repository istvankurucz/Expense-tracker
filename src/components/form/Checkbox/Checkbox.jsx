import { forwardRef } from "react";
import "./Checkbox.css";

const Checkbox = forwardRef(({ variant = "accent", label, id, className, ...rest }, ref) => {
	return (
		<label className={`checkbox${className ? ` ${className}` : ""}`}>
			<input type="checkbox" ref={ref} className="checkbox__input" {...rest} />
			<span className="checkbox__marker"></span>
			<span className="checkbox__label">
				{label}
				{rest.required && <span className="checkbox__required">*</span>}
			</span>
		</label>
	);
});

export default Checkbox;
