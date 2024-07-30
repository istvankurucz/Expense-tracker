import "./AuthTitle.css";

function AuthTitle({ className, children }) {
	return <h1 className={`authTitle${className ? ` ${className}` : ""}`}>{children}</h1>;
}

export default AuthTitle;
