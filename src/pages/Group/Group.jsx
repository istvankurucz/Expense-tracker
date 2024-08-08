import GroupLoadingFrame from "../../components/layout/LoadingFrame/GroupLoadingFrame/GroupLoadingFrame";
import Page from "../../components/layout/Page/Page";
import Section from "../../components/layout/Section/Section";
import { useGroupContext } from "../../contexts/group/GroupContext";
import "./Group.css";

function Group() {
	const { group } = useGroupContext();
	// console.log("Group:", group);

	return (
		<GroupLoadingFrame>
			<Page className="group">
				<Section id="groupTitle">
					<Page.Title>{group == null ? "Group name" : group.name}</Page.Title>
				</Section>
			</Page>
		</GroupLoadingFrame>
	);
}

export default Group;
