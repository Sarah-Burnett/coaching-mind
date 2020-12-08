import React, { useState } from "react";
import * as s from "../styles/variables";
import NavLinks from "./NavLinks";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Menu, ShoppingCart, X } from "react-feather";
import { A } from "../styles/components";
import { useRouter } from "next/router";
import useWindowSize from "../utilities/useWindowSize";
import useCart from "../utilities/useCart";

export default function Nav() {
  const { toggleCartOpen } = useCart();
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);
  const toggleMobNav = () => setIsMobNavOpen((prev) => !prev);
  const router = useRouter();
  const { width } = useWindowSize();
  return (
    <NavBar>
      <img
        src="/logo.png"
        alt="Coaching Mind"
        onClick={() => router.push("/")}
      />
      {router.route.includes("shop") ? (
        <CartButton onClick={toggleCartOpen}>
          <ShoppingCart />
        </CartButton>
      ) : width > parseInt(s.desktop) ? (
        <NavLinks />
      ) : (
        <>
          <CSSTransition
            in={isMobNavOpen}
            timeout={1000}
            classNames="fade"
            unmountOnExit
          >
            <NavLinks toggleMobNav={toggleMobNav} />
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

const CartButton = styled.span`
  cursor: pointer;
`;
