import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import useAuth from "./hooks/auth/useAuth";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import Feedback from "./components/ui/Feedback/Feedback";
import Header from "./components/layout/Header/Header";
import "./App.css";
import Footer from "./components/layout/Footer/Footer";

function App() {
	useAuth();

	// Functions
	function renderWithHeaderAndFooter(component) {
		return (
			<>
				<Header />
				{component}
				<Footer />
			</>
		);
	}

	return (
		<div className="app">
			<Feedback />

			<Routes>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/password-reset" element={<PasswordReset />} />

				<Route path="/" element={renderWithHeaderAndFooter(<Home />)} />
				<Route path="*" element={<h1>Page not found</h1>} />
			</Routes>
		</div>
	);
}

export default App;
