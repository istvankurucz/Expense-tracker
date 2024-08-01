import Overlay from "../../Overlay/Overlay";
import "./AuthOverlay.css";

function AuthOverlay({ show, className, children }) {
	return (
		<Overlay show={show} className={`authOvrelay${className ? ` ${className}` : ""}`}>
			{children}
		</Overlay>
	);
}

export default AuthOverlay;
