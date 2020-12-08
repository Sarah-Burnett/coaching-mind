import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [auth, setAuth] = useState({
		isAuth: false,
		jwt: null,
		role: null,
		username: null,
	});
	return (
		<AuthContext.Provider value={[auth, setAuth]}>
			{props.children}
		</AuthContext.Provider>
	);
};
