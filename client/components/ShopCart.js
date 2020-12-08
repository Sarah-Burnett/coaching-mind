import React from "react";
import styled from "styled-components";
import { TransparentButton } from "../styles/components";
import * as s from "../styles/variables";

export default function ShopCart() {
  return (
    <Cart>
      <h3>Shopping Cart</h3>
      <div></div>
      <TransparentButton>Purchase</TransparentButton>
    </Cart>
  );
}

const Cart = styled.div`
  height: 85vh;
  width: 100vw;
  color: ${s.white};
  background: ${s.red};
  position: fixed;
  top: 15vh;
  right: 0;
  padding: 2vh ${s.wPadding};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${s.tablet}) {
    width: 40vw;
  }
`;
