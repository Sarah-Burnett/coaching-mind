import React from "react";
import styled from "styled-components";
import * as s from "../styles/variables";
import findComponent from "../utilities/findComponent";

const Links = styled.ul`
	font-size: 80%;
	position: absolute;
	z-index: 99;
	top: 12vh;
	left: 0;
	background: ${s.red};
	height: 40vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 0;
`;

export default function MobNavLinks({links}) {
	return (
		<Links>
			{links.map(({ component, text }) => {
				const Component = findComponent(component);
				return (
					<li key={text}>
						<Component color={s.red}>{text}</Component>
					</li>
				);
			})}
		</Links>
	);
}
