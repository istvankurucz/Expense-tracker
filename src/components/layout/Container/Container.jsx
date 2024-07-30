import "./Container.css";

function Container({ maxWidth = "1200px", centered = true, className, children }) {
	return (
		<div
			style={{ "--max-width": maxWidth }}
			className={`container${centered ? " container--centered" : ""}${
				className ? ` ${className}` : ""
			}`}>
			{children}
		</div>
	);
}

export default Container;
