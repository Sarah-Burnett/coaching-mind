import styled from "styled-components";
import * as s from "./variables";

//Button - transparent button, hover state white
export const Button = styled.button`
	border: 2px solid ${s.white};
	border-radius: 30px;
	padding: 2vh 4vw;
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
	&:not(:hover) {
		transform: scale(0.9);
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${s.white};
`;

export const Heading = styled.h1`
	height: 40vh;
	line-height: 40vh;
	background: ${(props) => (props.color ? s[props.color] : s.red)};
	color: ${s.white};
	margin: 0;
`;

export const Paper = styled.section`
	background: ${s.paper};
	ul {
		color: #555;
		font-size: 22px;
		padding: 0 !important;
		width: 100%;
		border: 1px solid #dedede;
		margin: 0;
	}
	li {
		list-style: none;
		border-bottom: 1px dotted #ccc;
		text-indent: 25px;
		height: 2em;
		padding: 0;
		text-transform: capitalize;
		&:hover {
			background-color: #f0f0f0;
			transition: all 0.2s;
		}
	}
	div {
		border-left: 1px solid ${s.red};
		height: 2em;
		margin: 0;
		margin-left: 10vw;
		display: flex;
		align-items: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		h4 {
			margin: 0;
			padding: 0;
		}
	}
`;
