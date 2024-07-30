import Modal from "../../components/layout/Modal/Modal";
import AuthOverlay from "../../components/layout/Overlay/AuthOverlay/AuthOverlay";
import AuthTitle from "../../components/ui/AuthTitle/AuthTitle";
import "./SignIn.css";

function SignIn() {
	return (
		<AuthOverlay show={true} className="signin">
			<Modal>
				<Modal.Header>
					<AuthTitle>Bejelentkezés</AuthTitle>
				</Modal.Header>

				<Modal.Body>
					Input1
					<br />
					Input1
					<br />
					Input1
					<br />
					Input1
					<br />
				</Modal.Body>

				<Modal.Footer>
					<button>Buttin 1</button>
					<button>Buttin 2</button>
				</Modal.Footer>
			</Modal>
		</AuthOverlay>
	);
}

export default SignIn;
