import * as s from "../styles/variables";
import styled from "styled-components";
import { AlertTriangle } from "react-feather";

export default function Error({ errors }) {
	return (
		<ErrorBar className="errors">
			<AlertTriangle />
			<div>
				{errors.map((error) => (
					<span key={error}> {error}</span>
				))}
			</div>
		</ErrorBar>
	);
}

export const ErrorBar = styled.figure`
    color: ${s.white};
    background: ${s.red};
	font-size: 90%;
	padding: 1vh 2vw;
	display: flex;
	align-items: center;
	width: 100%;
    margin: 2vw 0;
    text-align: left;
	span {
		display: block;
		margin: 1vh;
	}
	svg {
		margin: 1vh;
	}
`;
