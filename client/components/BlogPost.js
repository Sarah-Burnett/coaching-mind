import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Layout = styled.div``;

export default function BlogPost({post}) {
	console.log(post)
	return (
		<Layout>
			<ReactMarkdown
				source={body}
				transformImageUri={(input) => `http://localhost:1337${input}`}
			/>
		</Layout>
	);
}
