import styled from "styled-components";
import * as s from "../styles/variables";
import { Img, FilledButton } from "../styles/components";

const Grid = styled.section`
	@media (min-width: ${s.tablet}) {
		display: flex;
		min-height: 50vh;
		justify-content: center;
	}
	div {
		width: 100vw;
		color: ${s.white};
		display: block;
		h3,
		p {
			width: 100%;
		}
		@media (min-width: ${s.tablet}) {
			width: 50vw;
		}
	}
	div:nth-child(2) {
		padding: 2vh ${s.wPadding};
	}
`;

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
