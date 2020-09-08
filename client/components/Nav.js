import React, { useState, useEffect } from "react";
import * as s from "../styles/variables";
import NavLinksMob from "./NavLinksMob";
import MediaQuery from "react-responsive";
import NavLinksDesk from "./NavLinksDesk";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Menu, X } from "react-feather";
import { A } from "../styles/components";
import fetch from "../utilities/fetch";

const NavBar = styled.nav`
	background: ${s.red};
	position: fixed;
	height: 15vh;
	width: 100vw;
	top: 0;
	left: 0;
	padding: 1vh ${s.wPadding};
	img {
		max-height: 100%;
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
`;
export default function Nav() {
	const [navLinks, setNavLinks] = useState([]);
	const [isMobNavOpen, setIsMobNavOpen] = useState(false);
	const toggleMobNav = () => setIsMobNavOpen((prev) => !prev);
	useEffect(() => fetch('/api/nav', setNavLinks), [])
	return (
		<NavBar>
			<img src="/logo.png" />
			<MediaQuery minDeviceWidth={s.desktop}>
				<NavLinksDesk links={navLinks} />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={s.desktop}>
				<CSSTransition
					in={isMobNavOpen}
					timeout={1000}
					classNames="fade"
					unmountOnExit
				>
					<NavLinksMob links={navLinks} />
				</CSSTransition>
				<A onClick={toggleMobNav}>{isMobNavOpen ? <X /> : <Menu />}</A>
			</MediaQuery>
		</NavBar>
	);
}
