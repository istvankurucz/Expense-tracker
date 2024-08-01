import AuthModal from "./AuthModal/AuthModal";
import AuthOverlay from "./AuthOverlay/AuthOverlay";
import AuthTitle from "./AuthTitle/AuthTitle";
import AuthModalBody from "./AuthModal/AuthModalBody/AuthModalBody";
import "./Auth.css";
import AuthText from "./AuthText/AuthText";
import AuthLink from "./AuthLink/AuthLink";

function Auth() {
	return <></>;
}

Auth.Overlay = AuthOverlay;
Auth.Modal = AuthModal;
Auth.Modal.Body = AuthModalBody;
Auth.Title = AuthTitle;
Auth.Text = AuthText;
Auth.Link = AuthLink;

export default Auth;
