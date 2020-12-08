import styled from "styled-components";
import * as s from "../styles/variables";
import { Loader } from "react-feather";
import { Heading } from "../styles/components";

export default function Loading({ color }) {
	return (
		<LoadScreen>
			<Heading color={color}>
				<Loader size="60" />
			</Heading>
			<div></div>
		</LoadScreen>
	);
}

const LoadScreen = styled.section`
	height: 70vh;
	background: ${s.paper};
	div {
		height: 30vh;
	}
	svg {
		animation-name: spin;
		animation-duration: 10s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
