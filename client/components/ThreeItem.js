import React from "react";
import * as s from "../styles/variables";
import styled from "styled-components";
import MediaQuery from "react-responsive";

export default function ThreeItem({ item: { title, img, date, url } }) {
	const Grid = styled.div`
		div {
			border-radius: 15px;
			width: 100%;
			background: lightblue url(${img}) no-repeat center;
			background-size: cover;
			height: 50vh;
		}
		padding: 2vh 2vw;
		margin: 1vw;
		a:hover {
			opacity: 0.7;
		}
		@media (max-width: ${s.desktop}) {
			background: ${s.white};
			border-radius: 15px;
			padding: 3vh 3vw;
			margin: 2vh;
		}
	`;
	return (
		<Grid key={title}>
			<div />
			<a href={url}>
				<h4>{title}</h4>
			</a>
			<p>{date}</p>
			<a href={url}>Read more →</a>
		</Grid>
	);
}
