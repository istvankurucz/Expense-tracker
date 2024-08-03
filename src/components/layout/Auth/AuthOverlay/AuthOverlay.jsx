import PropTypes from "prop-types";
import Overlay from "../../Overlay/Overlay";
import "./AuthOverlay.css";

function AuthOverlay({ show, className, children }) {
	return (
		<Overlay show={show} className={`authOvrelay${className ? ` ${className}` : ""}`}>
			{children}
		</Overlay>
	);
}

AuthOverlay.propTypes = {
	show: PropTypes.bool.isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default AuthOverlay;
