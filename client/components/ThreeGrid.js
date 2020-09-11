import React from "react";
import styled from "styled-components";
import * as s from "../styles/variables";
import { GreySection } from "../styles/components";

const Grid = styled.div`
	width: 100vw;
	color: ${s.blue};
	@media (min-width: ${s.desktop}) {
		display: grid;
		align-items: center;
		justify-content: center;
		grid-template-columns: repeat(3, minmax(325px, 1fr));
	}
`;

export default function ThreeGrid({ heading, grid, Component }) {
	return (
		<GreySection>
			<h3>{heading}</h3>
			<Grid>
				{grid.map((item, index) => (
                    <Component key={index} item={item}/>
				))}
			</Grid>
		</GreySection>
	);
}
