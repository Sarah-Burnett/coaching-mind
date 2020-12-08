export default function getUserFromCookie(cookie) {
	if (!cookie) return false;
	const cookies = cookie.split(";");
	let user = cookies.filter((key) => key.includes("user="));
	if (user.length === 0) return false;
	return JSON.parse(user[0].split("=")[1]);
}

// export function checkAuthenticated(cookie, role, res) {
// 	const user = getUserFromCookie(cookie);
// 	if (!user) return res.writeHead(301, { Location: "/login" }).end();
// 	if (user.role !== role)
// 		return res.writeHead(301, { Location: `/${user.role}` }).end();
// 	return user;
// }

// export function checkNotAuthenticated(cookie, res) {
// 	const user = getUserFromCookie(cookie);
// 	if (user) return res.writeHead(301, { Location: `/${user.role}` }).end();
// }
