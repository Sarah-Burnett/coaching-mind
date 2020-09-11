import styled from "styled-components";
import * as s from "./variables";

//Button - transparent button, hover state white
export const Button = styled.button`
	border: 2px solid ${s.white};
	border-radius: 30px;
	padding: 2vh 3vw;
	font-family: inherit;
	font-size: inherit;
	font-weight: bold;
	transition: all 0.3s;
	cursor: pointer;
`;

export const TransparentButton = styled(Button)`
	background: none;
	color: ${s.white};
	&:hover {
		background: ${s.white};
		color: ${(props) => (props.color ? props.color : "#000")};
	}
`;

//Primary Button - white button, hover state opacity
export const FilledButton = styled(Button)`
	background: ${s.white};
	color: ${(props) => (props.color ? s[props.color] : s.red)};
	&:hover {
		opacity: 0.7;
	}
`;

export const A = styled.a`
	color: ${s.white};
	transition: all 0.3s;
	cursor: pointer;
	&:hover {
		color: ${s.grey};
	}
`;

export const GreySection = styled.section`
	min-height: 90vh;
	background: ${s.grey};
	color: ${s.red};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2vh ${s.wPadding};
	img,
	div {
		max-width: 100%;
	}
	h1,
	h2,
	h3,
	h4 {
		text-transform: uppercase;
	}
`;

export const Img = styled.div`
	min-height: 50vh;
	background-color: lightblue;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;