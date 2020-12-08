import { useEffect } from "react";
import getUserFromCookie from "../utilities/getUserFromCookie";
import useAuth from "../utilities/useAuth";

export default function Login() {
	const { isAuth, login } = useAuth();
	useEffect(() => {
		if (!isAuth) {
			const cookie = document.cookie;
			const user = getUserFromCookie(cookie);
			if (user) login(user);
		}
	}, []);
	return null;
}
