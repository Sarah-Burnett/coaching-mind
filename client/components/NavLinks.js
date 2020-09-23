import { useState, useEffect } from "react";
import styled from "styled-components";
import * as s from "../styles/variables";
import findComponent from "../utilities/findComponent";
import fetch from "../utilities/fetch";
import { useRouter } from "next/router";

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
	@media (min-width: ${s.desktop}) {
		position: static;
		font-size: 80%;
		flex-direction: row;
		justify-content: flex-end;
		height: 15vh;
		li {
			padding: 1vh 1vw;
		}
	}
`;

export default function NavLinks({ toggleMobNav }) {
	const [links, setLinks] = useState([]);
	const router = useRouter();
	useEffect(() => fetch("/api/nav", setLinks), []);
	return (
		<Links onClick={toggleMobNav}>
			{links.map(({ component, text, url }) => {
				const Component = findComponent(component);
				return (
					<li key={text}>
						<Component
							href={url}
							onClick={() => router.push(url)}
							color={s.red}
						>
							{text}
						</Component>
					</li>
				);
			})}
		</Links>
	);
}
