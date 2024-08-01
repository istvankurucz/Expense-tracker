import "./AuthText.css";

function AuthText({ type = "normal", centered, className, children }) {
	return (
		<p
			className={`authText authText--${type}${centered ? " authText--centered" : ""}${
				className ? ` ${className}` : ""
			}`}>
			{children}
		</p>
	);
}

export default AuthText;
