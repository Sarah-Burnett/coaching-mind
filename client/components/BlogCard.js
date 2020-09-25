import styled from "styled-components";
import * as s from "../styles/variables";
import { MonthDayYear } from "./Dates";

export default function BlogCard({
	item: { title, image, publishedAt, slug },
}) {
	const url = `/blog/${slug}`;
	return (
		<Card>
			<Img
				color="white"
				style={{ backgroundImage: `url(http://localhost:1337${image.url})` }}
			/>
			<a href={url}>
				<h3>{title}</h3>
			</a>
			<p>
				<MonthDayYear date={publishedAt} />
			</p>
			<a href={url}>Read more →</a>
		</Card>
	);
}

const Card = styled.div`
	width: 100%;
	margin: 4vh 0;
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
		background: ${s.white};
		border-radius: 15px;
	}
`;

const Img = styled.div`
	height: 50vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 15px;
`;
