import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";
import useGroup from "../../hooks/group/useGroup";

export const GroupContext = createContext();

function GroupProvider({ children }) {
	const { group, groupLoading } = useGroup();

	return <GroupContext.Provider value={{ group, groupLoading }}>{children}</GroupContext.Provider>;
}

export const useGroupContext = () => useContext(GroupContext);

GroupContext.propTypes = {
	children: PropTypes.node.isRequired,
};

export default GroupProvider;
