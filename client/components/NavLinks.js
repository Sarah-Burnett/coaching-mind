import styled from "styled-components";
import * as s from "../styles/variables";
import findComponent from "../utilities/findComponent";
import { useRouter } from "next/router";
import useAuth from "../utilities/useAuth";
import { TransparentButton } from "../styles/components";

function toTitleCase(str) {
	let string = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		string += str[i];
	}
	return string;
}

export default function NavLinks({ toggleMobNav }) {
	const router = useRouter();
	let { isAuth, role, logout } = useAuth();
	return (
		<Links onClick={toggleMobNav}>
			{links.map(({ component, text, url }) => {
				const Component = findComponent(component);
				return isAuth && text === "Login" ? (
					<>
						<li key={text}>
							<Component onClick={() => logout()} color={s.red}>
								Logout
							</Component>
						</li>
						<li key={role}>
							<TransparentButton onClick={() => router.push(`/${role}`)}>
								{toTitleCase(role)}
							</TransparentButton>
						</li>
					</>
				) : isAuth && text === "Join" ? null : (
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

const links = [
	{
		text: "About",
		component: "A",
		url: "/about",
	},
	{
		text: "Blog",
		component: "A",
		url: "/blog",
	},
	{
		text: "Contact",
		component: "A",
		url: "/#contact",
	},
	{
		text: "Login",
		component: "A",
		url: "/login",
	},
	{
		text: "Join",
		component: "TransparentButton",
		url: "/join",
	},
];

const Links = styled.ul`
	font-size: 80%;
	position: absolute;
	z-index: 99;
	top: 12vh;
	left: 0;
	background: ${s.red};
	height: 50vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 0;
	button {
		min-width: 100px;
	}
	@media (min-width: ${s.desktop}) {
		position: static;
		font-size: 80%;
		flex-direction: row;
		justify-content: flex-end;
		height: 15vh;
		li {
			padding: 1vh 1.5vw;
		}
	}
`;
