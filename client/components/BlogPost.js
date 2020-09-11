import styled from "styled-components";
import * as s from "../styles/variables";
import ReactMarkdown from "react-markdown";
import { Heading, Img } from "../styles/components";

const Layout = styled.article`
	padding: 1vh ${s.wPadding};
	a {
		color: ${s.blue};
		&:hover {
			color: ${s.red};
		}
	}
`;

export default function BlogPost({ post: { title, image, body } }) {
	return (
		<>
			<Heading color="blue">{title}</Heading>
			<Layout>
				<ReactMarkdown
					source={body}
					transformImageUri={(input) => `http://localhost:1337${input}`}
				/>
			</Layout>
			<Img
				style={{ backgroundImage: `url(http://localhost:1337${image.url})` }}
			/>
		</>
	);
}
