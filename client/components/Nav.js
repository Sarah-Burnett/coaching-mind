import React, { useState } from "react";
import * as s from "../styles/variables";
import NavLinks from "./NavLinks";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Menu, X } from "react-feather";
import { A } from "../styles/components";

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
	const [isMobNavOpen, setIsMobNavOpen] = useState(false);
	const toggleMobNav = () => setIsMobNavOpen((prev) => !prev);
	return (
		<NavBar>
			<img src="/logo.png" />
			<MediaQuery minDeviceWidth={s.desktop}>
				<NavLinks />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={s.desktop}>
				<CSSTransition
					in={isMobNavOpen}
					timeout={1000}
					classNames="fade"
					unmountOnExit
				>
					<NavLinks />
				</CSSTransition>
				<A onClick={toggleMobNav}>{isMobNavOpen ? <X /> : <Menu />}</A>
			</MediaQuery>
		</NavBar>
	);
}
