import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import getUserFromCookie from "./getUserFromCookie";

export default function useAuth() {
	const [auth, setAuth] = useContext(AuthContext);
	const router = useRouter();
	const login = ({ jwt, role, username }) => {
		console.log(jwt, role, username);
		setAuth({
			isAuth: true,
			jwt,
			role,
			username,
		});
		document.cookie = `user=${JSON.stringify({ jwt, role, username })}`;
	};

	const logout = () => {
		setAuth({
			isAuth: false,
			jwt: null,
			role: null,
			username: null,
		});
		document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		router.replace("/");
	};

	const loginFromCookie = () => {
		const cookie = document.cookie;
		const user = getUserFromCookie(cookie);
		if (!user) return false;
		user.isAuth = true;
		setAuth(user);
		return user;
	};

	const { isAuth, role, username } = auth;
	return {
		auth,
		isAuth,
		role,
		username,
		login,
		logout,
		loginFromCookie,
	};
}
