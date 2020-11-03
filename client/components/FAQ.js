import { useState } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import * as s from "../styles/variables";

export default function FAQ({ question }) {
	const [isOpen, setIsOpen] = useState(false);
	const faqTransitions = useTransition(isOpen, null, {
		from: { height: 0, opacity: 0 },
		enter: [{ height: "auto" }, { opacity: 1 }],
		leave: [{ opacity: 0 }, { height: 0 }],
		config: { duration: 150 },
	});
	const iconTransitions = useTransition(isOpen, null, {
		from: { position: "absolute", opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
	return (
		<Question>
			<h3 onClick={() => setIsOpen(() => !isOpen)}>
				{iconTransitions.map(({ item, key, props }) =>
					item ? (
						<animated.span style={props}>-</animated.span>
					) : (
						<animated.span style={props}>+</animated.span>
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
	margin: 3vh 0;
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
`;
