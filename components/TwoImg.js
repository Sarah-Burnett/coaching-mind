import React from "react";
import * as s from "../styles/variables";

export default function Img({ src }){
	return (
		<>
			<div />
			<style jsx>{`
				width: 100vw;
				min-height: 50vh;
				background: lightblue url(${src}) no-repeat center;
				background-size: cover;
				@media (min-width: ${s.tablet}) {
					width: 50vw;
				}
			`}</style>
		</>
	);
};
