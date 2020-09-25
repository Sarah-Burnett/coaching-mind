import "../styles/globals.css";
import "../styles/transitions.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
	const [auth, setAuth] = useState({
		isAuth: false,
		jwt: null,
		role: null,
		username: null,
	});
	const authProp = {
		auth,
		login: ({ jwt, role, username }) => {
			setAuth({
				isAuth: true,
				jwt,
				role,
				username,
			});
		},
		logout: () => setAuth({
			isAuth: false,
			jwt: null,
			role: null,
			username: null,
		}),
	};
	return (
		<div>
			<Nav authProp={authProp}/>
			<Main>
				<Component {...pageProps} authProp={authProp} />
			</Main>
			<Footer />
		</div>
	);
}

const Main = styled.main`
	min-height: 70vh;
	margin-top: 5vh;
`;
