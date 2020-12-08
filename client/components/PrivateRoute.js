import { useRouter } from "next/router";
import useAuth from "../utilities/useAuth";

export default function PrivateRoute({ children }) {
	const { auth } = useAuth();
	if (auth.isAuth && auth.role === role) return { children };
	return null;
}
