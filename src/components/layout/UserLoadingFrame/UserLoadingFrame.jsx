import PropTypes from "prop-types";
import { useStateValue } from "../../../contexts/Context API/StateProvider";
import UserLoading from "../../ui/UserLoading/UserLoading";
import Page from "../Page/Page";
import NoUser from "../Section/NoUser/NoUser";
import "./UserLoadingFrame.css";

function UserLoadingFrame({ children }) {
	const [{ user, userLoading }] = useStateValue();

	// Laoding state
	if (userLoading) return <UserLoading />;

	// Error state
	if (!userLoading && user == null)
		return (
			<Page>
				<NoUser />
			</Page>
		);

	// Normal
	return children;
}

UserLoadingFrame.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserLoadingFrame;
