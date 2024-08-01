import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import "./App.css";
import Overlay from "./components/layout/Overlay/Overlay";
import Modal from "./components/layout/Modal/Modal";
import { useState } from "react";
import SignUp from "./pages/SignUp/SignUp";
import useAuth from "./hooks/auth/useAuth";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import Feedback from "./components/ui/Feedback/Feedback";

function App() {
	useAuth();

	const [show, setShow] = useState(false);

	return (
		<div className="app">
			<Feedback />

			<Overlay show={show}>
				<Modal>
					<Modal.Header>
						Modal
						<Modal.Close onClick={() => setShow(false)} />
					</Modal.Header>
				</Modal>
			</Overlay>

			<button onClick={() => setShow(true)}>modal</button>

			<Routes>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/password-reset" element={<PasswordReset />} />

				<Route path="/" element={<Home />} />
				<Route path="*" element={<h1>Page not found</h1>} />
			</Routes>
		</div>
	);
}

export default App;
