import React from "react";
import styled from "styled-components";
import { FilledButton, Img } from "../styles/components";
import * as s from "../styles/variables";
import useWindowSize from "../utilities/useWindowSize";

export default function FullImg({ img, text }) {
	const { width } = useWindowSize();
	const setBackgroundImage = (size) => {
		if (width > 400) return `url(${img[0]})`;
		else return `url(${img[1]})`;
	};
	return (
		<FullImage style={{ backgroundImage: setBackgroundImage() }}>
			<h1>{text.heading}</h1>
			<h4>{text.p}</h4>
			<p>
				<FilledButton color={text.color}>{text.button}</FilledButton>
			</p>
		</FullImage>
	);
}

const FullImage = styled(Img)`
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${s.white};
	padding: 2vh ${s.wPadding};
	h1,
	h4 {
		-webkit-text-stroke: 0.5px black;
	}
	h4 {
		max-width: 700px;
	}
`;
