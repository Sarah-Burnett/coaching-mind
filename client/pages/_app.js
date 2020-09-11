import "../styles/globals.css";
import "../styles/transitions.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.main`
	min-height: 70vh;
	margin-top: 5vh;
`;

export default function MyApp({ Component, pageProps }) {
	const [auth, setAuth] = useState({
		isAuth: false,
		jwt: null,
		role: null,
		username: null,
	});
	return (
		<div>
			<Nav />
			<Main>
				<Component {...pageProps} auth={auth} setAuth={setAuth} />
			</Main>
			<Footer />
		</div>
	);
}
