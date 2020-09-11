import React from "react";
import styled from "styled-components";
import { FilledButton, Img } from "../styles/components";
import * as s from "../styles/variables";

export default function FullImg({ img, text }) {
	const FullImage = styled(Img)`
		min-height: 90vh;
        display: flex;
        flex-direction: column;
		align-items: center;
        justify-content: center;
        color: ${s.white};
		padding: 2vh ${s.wPadding};
		h4 {
			max-width: 700px;
		}
	`;
	return (
		<FullImage style={{ backgroundImage: `url(${img})` }}>
			<h1>{text.heading}</h1>
			<h4>{text.p}</h4>
			<p>
				<FilledButton color={text.color}>{text.button}</FilledButton>
			</p>
		</FullImage>
	);
}
