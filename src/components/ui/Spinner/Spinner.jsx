import "./Spinner.css";

function Spinner({ size = "1rem", variant = "accent", text = "", className }) {
	return (
		<div className={`spinner spinner--${variant}${className ? ` ${className}` : ""}`}>
			<span style={{ "--size": size }} className="spinner__shape"></span>
			{text !== "" && <span className="spinner__text">{text}</span>}
		</div>
	);
}

export default Spinner;
