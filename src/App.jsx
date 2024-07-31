import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import "./App.css";
import Overlay from "./components/layout/Overlay/Overlay";
import Modal from "./components/layout/Modal/Modal";
import { useState } from "react";

function App() {
	const [show, setShow] = useState(false);

	return (
		<div className="app">
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
				<Route path="/" element={<Home />} />
				<Route path="*" element={<h1>Page not found</h1>} />
			</Routes>
		</div>
	);
}

export default App;
