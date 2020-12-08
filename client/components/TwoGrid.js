import styled from "styled-components";
import * as s from "../styles/variables";
import { Img, FilledButton } from "../styles/components";
import { useRouter } from "next/router";

export default function TwoGrid({ reverse, text, img, link }) {
	const flexDirection = () => (reverse ? "row-reverse" : "reverse");
	const router = useRouter();
	const redirect = () => router.replace(link);
	return (
		<Grid style={{ flexDirection: flexDirection() }}>
			<Img style={{ backgroundImage: `url(${img})` }} />
			<div style={{ background: s[text.color] }}>
				<h3>{text.heading}</h3>
				<p>{text.p}</p>
				<p>
					<FilledButton onClick={redirect} color={text.color}>
						{text.button}
					</FilledButton>
				</p>
			</div>
		</Grid>
	);
}

const Grid = styled.div`
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
