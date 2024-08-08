export default function checkIfUserIsInGroup(members = [], userId = "") {
	if (userId === "") return false;

	const userIngGroup = members.find((member) => member.id === userId);
	return userIngGroup != undefined;
}
