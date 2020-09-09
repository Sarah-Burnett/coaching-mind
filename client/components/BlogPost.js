import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = styled.div``;

export default function BlogPost({ post: { body } }) {
	return (
		<div>
			<Nav />
			<main>
				<Layout>
					<ReactMarkdown
						source={body}
						transformImageUri={(input) => `http://localhost:1337${input}`}
					/>
				</Layout>
			</main>
			<Footer />
		</div>
	);
}
