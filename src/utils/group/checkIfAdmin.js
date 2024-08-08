export default function checkIfAdmin(roles = [], userId = "") {
	if (userId === "") return false;

	const userRole = roles.find((role) => role.member?.id === userId);
	if (userRole == undefined) return false;

	return userRole.role === "admin";
}
