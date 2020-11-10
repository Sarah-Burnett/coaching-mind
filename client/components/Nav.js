import React, { useState } from "react";
import * as s from "../styles/variables";
import NavLinks from "./NavLinks";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Menu, ShoppingCart, X } from "react-feather";
import { A } from "../styles/components";
import { useRouter } from "next/router";
import useWindowSize from "../utilities/useWindowSize";

export default function Nav({ authProp }) {
	const [isMobNavOpen, setIsMobNavOpen] = useState(false);
	const toggleMobNav = () => setIsMobNavOpen((prev) => !prev);
	const router = useRouter();
	const page = router.route;
	const { width } = useWindowSize();
	return (
		<NavBar>
			<img
				src="/logo.png"
				alt="Coaching Mind"
				onClick={() => router.push("/")}
			/>
			{router.route.includes("shop") ? (
				<ShoppingCart />
			) : width > parseInt(s.desktop) ? (
				<NavLinks authProp={authProp} />
			) : (
				<>
					<CSSTransition
						in={isMobNavOpen}
						timeout={1000}
						classNames="fade"
						unmountOnExit
					>
						<NavLinks toggleMobNav={toggleMobNav} authProp={authProp} />
					</CSSTransition>
					<A onClick={toggleMobNav}>{isMobNavOpen ? <X /> : <Menu />}</A>
				</>
			)}
		</NavBar>
	);
}

const NavBar = styled.nav`
	background: ${s.red};
	position: fixed;
	z-index: 1000;
	height: 15vh;
	width: 100vw;
	top: 0;
	left: 0;
	padding: 1vh ${s.wPadding};
	img {
		max-height: 100%;
		cursor: pointer;
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	color: ${s.white};
`;
