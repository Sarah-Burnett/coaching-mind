import React from "react";
import * as s from "../styles/variables";
import { FilledButton } from "../styles/components";

export default function Text({ text }) {
	return (
		<>
			<div>
				<h3>{text.heading}</h3>
				<p>{text.p}</p>
				<p>
					<FilledButton color={text.color}>{text.button}</FilledButton>
				</p>
			</div>
			<style jsx>{`
				background: ${s[text.color]};
				width: 100vw;
				color: ${s.white};
				padding: 2vh ${s.wPadding};
				display: block;
				h3,
				p {
					width: 100%;
				}
				@media (min-width: ${s.tablet}) {
					width: 50vw;
				}
			`}</style>
		</>
	);
}
