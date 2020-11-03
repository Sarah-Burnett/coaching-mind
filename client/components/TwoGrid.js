import styled from "styled-components";
import * as s from "../styles/variables";
import { Img, FilledButton } from "../styles/components";

export default function TwoGrid({ reverse, text, img }) {
	const flexDirection = () => (reverse ? "row-reverse" : "reverse");
	return (
		<Grid style={{ flexDirection: flexDirection() }}>
			<Img style={{ backgroundImage: `url(${img})` }} />
			<div style={{ background: s[text.color] }}>
				<h3>{text.heading}</h3>
				<p>{text.p}</p>
				<p>
					<FilledButton color={text.color}>{text.button}</FilledButton>
				</p>
			</div>
		</Grid>
	);
}

const Grid = styled.section`
	height: 85vh;
	div {
		width: 100vw;
		min-height: 50%;
		color: ${s.white};
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h3,
		p {
			width: 100%;
		}
		@media (min-width: ${s.desktop}) {
			width: 50vw;
		}
	}
	div:nth-child(2) {
		padding: 2vh ${s.wPadding};
	}
	@media (min-width: ${s.desktop}) {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
`;
