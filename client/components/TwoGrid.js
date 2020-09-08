import React from "react";
import TwoImg from "./TwoImg";
import TwoText from "./TwoText";
import * as s from "../styles/variables";

export default function Grid({ reverse, text, img }) {
	const flexDirection = () => reverse ? "row-reverse" : "reverse"; 
	return (
		<>
			<section>
				<TwoImg src={img} />
				<TwoText text={text} />
			</section>
			<style jsx>{`
				@media (min-width: ${s.tablet}) {
					display: flex;
					min-height: 50vh;
					justify-content: center;
					flex-direction: ${flexDirection()};
				}
			`}</style>
		</>
	);
}
