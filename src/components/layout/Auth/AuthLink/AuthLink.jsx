import { Link } from "react-router-dom";
import "./AuthLink.css";

function AuthLink({ to, replace = false, className, children }) {
	return (
		<Link to={to} replace={replace} className={`authLink${className ? ` ${className}` : ""}`}>
			{children}
		</Link>
	);
}

export default AuthLink;
