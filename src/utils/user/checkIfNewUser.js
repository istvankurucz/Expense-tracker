export default function checkIfNewUser(user) {
	const createdAt = parseInt(user.metadata.createdAt);
	const lastLoginAt = parseInt(user.metadata.lastLoginAt);

	return Math.abs(lastLoginAt - createdAt) < 10;
}
