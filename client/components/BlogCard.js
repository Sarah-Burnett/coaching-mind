import styled from "styled-components";
import * as s from "../styles/variables";
import Moment from "react-moment";

export default function BlogCard({
	item: { title, image, publishedAt, slug },
}) {
	const url = `/blog/${slug}`;
	return (
		<Card>
			<Img color="white"
				style={{ backgroundImage: `url(http://localhost:1337${image.url})` }}
			/>
			<a href={url}>
				<h3>{title}</h3>
			</a>
			<p>
				<Moment format="MMM Do YYYY">{publishedAt}</Moment>
			</p>
			<a href={url}>Read more →</a>
		</Card>
	);
}

const Card = styled.div`
	max-width: 90vw;
	padding: 2vh 2vw;
	margin: 1vw;
	a:hover {
		opacity: 0.7;
	}
	h3 {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	a:nth-child(4) {
		color: ${s.red};
	}
	@media (max-width: ${s.desktop}) {
		max-width: 30vw;
		background: ${s.white};
		border-radius: 15px;
		padding: 3vh 3vw;
		margin: 2vh;
	}
`;

const Img = styled.div`
	height: 50vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 15px;
`;
