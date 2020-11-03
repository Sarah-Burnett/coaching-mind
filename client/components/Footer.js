import styled from "styled-components";
import * as s from "../styles/variables";
import { A, TransparentButton } from "../styles/components";
import { Facebook, Twitter, Instagram, Linkedin } from "react-feather";

export default function Footer() {
	return (
		<FooterBar>
			<div>&copy; 2020 Coaching Mind</div>
			{links.map(({ title, links }) => (
				<section key={title}>
					<h4>{title}</h4>
					{links.map(({ text, url }) => (
						<p key={text} data-text={text}>
							<A href={url}>{text}</A>
						</p>
					))}
				</section>
			))}
			<div id="buttons">
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

const links = [
	{
		title: "Info",
		links: [
			{
				text: "Coaching",
				url: "/coaching",
			},
			{
				text: "Blog",
				url: "/blog",
			},
			{
				text: "FAQ",
				url: "/faq",
			},
		],
	},
	{
		title: "About",
		links: [
			{
				text: "About us",
				url: "/about",
			},
			{
				text: "Our Team",
				url: "/team",
			},
			{
				text: "Our Coaches",
				url: "/coaches",
			},
		],
	},
	{
		title: "Action",
		links: [
			{
				text: "Contact us",
				url: "/#contact",
			},
			{
				text: "Join us",
				url: "/join",
			},
			{
				text: "Shop",
				url: "/shop",
			},
			{
				text: "Vacancies",
				url: "/careers",
			},
		],
	},
];

const FooterBar = styled.div`
	min-height: 40vh;
	background: ${s.black};
	color: ${s.grey};
	padding: 2vh 0;
	div {
		margin: 2vh 0;
	}
	section {
		margin: 2vh 0;
		padding: 0;
		font-size: 90%;
		h4 {
			margin: 2vh 0;
		}
		a {
			line-height: 150%;
			padding: 0.5vh 0;
			border-bottom: 1px solid ${s.grey};
		}
	}
	button {
		margin: 0 1.5vw 2vh;
		padding: 0;
		height: 3em;
		width: 3em;
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	text-align: center;
	@media (min-width: ${s.desktop}) {
		display: grid;
		grid-template-columns: repeat(4, 1fr) auto;
		padding: 2vh ${s.wPadding};
		text-align: left;
		section {
			margin: 0;
		}
		button {
			display: flex;
		}
	}
`;
