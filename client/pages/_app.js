import "../styles/globals.css";
import "../styles/transitions.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Nav />
			<main style={{ minHeight: "70vh" }}>
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	);
}

export default MyApp;
