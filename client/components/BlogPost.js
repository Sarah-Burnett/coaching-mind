import styled from "styled-components";
import * as s from "../styles/variables";
import ReactMarkdown from "react-markdown";
import { Heading, Img } from "../styles/components";

export default function BlogPost({ post: { title, image, body } }) {
	return (
		<>
			<Heading color="blue">{title}</Heading>
			<Layout>
				<ReactMarkdown source={body} />
			</Layout>
			<Img style={{ backgroundImage: `url(${image.url})` }} />
		</>
	);
}

const Layout = styled.article`
	padding: 1vh ${s.wPadding};
	a {
		color: ${s.blue};
		&:hover {
			color: ${s.red};
		}
	}
	img {
		max-width: 100%;
		max-height: 70vh;
		/* margin: auto;	
		display: block; */
		float: right;
	}
`;
