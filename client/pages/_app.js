import "../styles/globals.css";
import "../styles/transitions.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "styled-components";
import { animated } from "react-spring";
import { useRouter } from "next/router";
import useFadeTransition from "../utilities/useFadeTransition";
import { AuthProvider } from "../context/AuthContext";
import Login from "../components/Login";

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const transitions = useFadeTransition(router.pathname);
	return (
		<AuthProvider>
			<Login />
			<Nav />
			<Main>
				{transitions.map(({ props, key }) => (
					<animated.div style={props} key={key}> 
						<Component {...pageProps} /> 
					</animated.div>
				))}
			</Main>
			<Footer />
		</AuthProvider>
	);
}

const Main = styled.main`
	min-height: 70vh;
	margin-top: 5vh;
`;
