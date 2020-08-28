import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as s from "../styles/variables";
import { A, TransparentButton } from "../styles/components";
import fetch from "../utilities/fetch";
import { Facebook, Twitter, Instagram, Linkedin } from "react-feather";

 const FooterBar = styled.div`
		min-height: 40vh;
		background: ${s.black};
		color: ${s.grey};
		display: grid;
		grid-template-columns: repeat(4, 1fr) auto;
        padding: 2vh ${s.wPadding};
        ul {
            margin: 0;
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1vh 0;
            padding: 0;
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }
 `;

export default function Footer() {
   
	const [footerLinks, setFooterLinks] = useState([]);
	useEffect(() => fetch("/api/footer", setFooterLinks), []);
	return (
		<FooterBar>
			<div>&copy; 2020 Coaching Mind</div>
			{footerLinks.map(({ title, links }) => (
				<ul key={title}>
					<li>{title}</li>
					{links.map(({ text, url }) => (
						<li key={text}>
							<A>{text}</A>
						</li>
					))}
				</ul>
			))}
			<div>
				<a href="">
					<TransparentButton>
						<Facebook />
					</TransparentButton>
				</a>
				<a href="">
					<TransparentButton>
						<Instagram />
					</TransparentButton>
				</a>
				<a href="">
					<TransparentButton>
						<Twitter />
					</TransparentButton>
				</a>
				<a href="">
					<TransparentButton>
						<Linkedin />
					</TransparentButton>
				</a>
			</div>
		</FooterBar>
	);
}
