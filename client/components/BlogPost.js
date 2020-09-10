import styled from "styled-components";
import * as s from "../styles/variables";
import ReactMarkdown from "react-markdown";

const Layout = styled.article`
	img {
		max-width: 100%;
		max-height: 50vh;
	}
	padding: 1vh ${s.wPadding};
`;

export default function BlogPost({ post: { title, image, body } }) {
	return (
		<Layout>
			<h1>{title}</h1>
			<img src={`http://localhost:1337${image.url}`} alt={title} />
			<ReactMarkdown
				source={body}
				transformImageUri={(input) => `http://localhost:1337${input}`}
			/>
		</Layout>
	);
}
