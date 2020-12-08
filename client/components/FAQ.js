import { useState } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import * as s from "../styles/variables";
import useFadeTransition from "../utilities/useFadeTransition";
import useHeightTransition from "../utilities/useHeightTransition";

export default function FAQ({ question }) {
	const [isOpen, setIsOpen] = useState(false);
	const faqTransitions = useHeightTransition(isOpen);
	const iconTransitions = useFadeTransition(isOpen);
	return (
		<Question>
			<h3 onClick={() => setIsOpen(() => !isOpen)}>
				{iconTransitions.map(({ item, key, props }) =>
					item ? (
						<animated.span key={key} style={props}>
							-
						</animated.span>
					) : (
						<animated.span key={key} style={props}>
							+
						</animated.span>
					)
				)}
				<span>{question.q}</span>
			</h3>
			{faqTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.p key={key} style={props}>
							{question.a}
						</animated.p>
					)
			)}
		</Question>
	);
}

const Question = styled.div`
	margin: 5vh 0;
	h3 {
		color: ${s.blue};
		font-size: smaller;
		cursor: pointer;
		span {
			font-size: x-large;
			text-align: center;
			&:last-child {
				position: relative;
				left: 25px;
				text-align: left;
			}
		}
	}
	span {
		position: absolute;
	}
	p {
		line-height: 1.4;
		padding: 2vh 0;
	}
`;
