import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import SignIn from "./pages/SignIn/SignIn";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<h1>Page not found</h1>} />
			</Routes>
		</div>
	);
}

export default App;
