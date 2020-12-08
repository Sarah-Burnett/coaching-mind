import "../styles/globals.css";
import "../styles/transitions.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();
	console.log(router.pathname);
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
		logout: () =>
			setAuth({
				isAuth: false,
				jwt: null,
				role: null,
				username: null,
			}),
	};
	const transitions = useTransition(router.pathname, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
	return (
		<div>
			<Nav authProp={authProp} />
			<Main>
				{/* {transitions.map(({ props, key }) => (
					<animated.div style={props} key={key}> */}
						<Component {...pageProps} authProp={authProp} />
					{/* </animated.div> */}
				{/* ))} */}
			</Main>
			<Footer />
		</div>
	);
}

const Main = styled.main`
	min-height: 70vh;
	margin-top: 5vh;
`;
