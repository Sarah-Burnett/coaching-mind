import React from "react";
import styled from "styled-components";
import * as s from "../styles/variables";
import findComponent from "../utilities/findComponent";

const Links = styled.ul`
	font-size: 80%;
	display: flex;
	align-items: center;
	li {
		padding: 1vh 1vw;
	}
`;

export default function DeskNavLinks({ links }) {
	return (
		<Links>
			{links.map(({ component, text }) => {
				const Component = findComponent(component);
				console.log(component, Component);
				return (
					<li key={text}>
						<Component color={s.red}>{text}</Component>
					</li>
				);
			})}
		</Links>
	);
}
