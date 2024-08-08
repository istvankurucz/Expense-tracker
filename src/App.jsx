import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import useAuth from "./hooks/auth/useAuth";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import Feedback from "./components/ui/Feedback/Feedback";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import NewTransactionButton from "./components/ui/Button/NewTransactionButton/NewTransactionButton";
import NewTransaction from "./pages/NewTransaction/NewTransaction";
import NewGroup from "./pages/NewGroup/NewGroup";
import Group from "./pages/Group/Group";
import Groups from "./pages/Groups/Groups";
import "./App.css";
import JoinGroup from "./pages/JoinGroup/JoinGroup";
import GroupProvider from "./contexts/group/GroupContext";

function App() {
	// Hooks
	useAuth();
	const location = useLocation();

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

			{location?.pathname !== "/new-transaction" && <NewTransactionButton />}

			<Routes>
				<Route
					path="/new-transaction"
					element={renderWithHeaderAndFooter(<NewTransaction />)}
				/>

				<Route path="/groups" element={renderWithHeaderAndFooter(<Groups />)} />
				<Route path="/new-group" element={renderWithHeaderAndFooter(<NewGroup />)} />
				<Route path="/join-group" element={renderWithHeaderAndFooter(<JoinGroup />)} />
				<Route
					path="/groups/:groupId"
					element={<GroupProvider>{renderWithHeaderAndFooter(<Group />)}</GroupProvider>}
				/>

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
