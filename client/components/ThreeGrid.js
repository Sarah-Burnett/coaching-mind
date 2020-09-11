import React from "react";
import styled from "styled-components";
import * as s from "../styles/variables";
import { GreySection } from "../styles/components";

const Grid = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	color: ${s.blue};
	grid-template-columns: auto;
	@media (min-width: ${s.desktop}) {
		grid-template-columns: repeat(3, 1fr);
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
