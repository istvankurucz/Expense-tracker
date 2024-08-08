import PropTypes from "prop-types";
import { useStateValue } from "../../../../contexts/Context API/StateProvider";
import LoadingFrame from "../LoadingFrame";
import UserLoading from "../../../ui/UserLoading/UserLoading";
import NoAccessToGroup from "../../Section/NoAccessToGroup/NoAccessToGroup";
import { useGroupContext } from "../../../../contexts/group/GroupContext";
import "./GroupLoadingFrame.css";

function GroupLoadingFrame({ children }) {
	const [{ user, userLoading }] = useStateValue();
	const { group, groupLoading } = useGroupContext();

	// console.log("Error:", (!groupLoading && user == null) || (group == null && !groupLoading));

	return (
		<LoadingFrame
			loading={userLoading || groupLoading}
			loadingElement={<UserLoading />}
			error={(!groupLoading && user == null) || (group == null && !groupLoading)}
			errorElement={<NoAccessToGroup />}
		>
			{children}
		</LoadingFrame>
	);
}

GroupLoadingFrame.propTypes = {
	children: PropTypes.node.isRequired,
};

export default GroupLoadingFrame;
