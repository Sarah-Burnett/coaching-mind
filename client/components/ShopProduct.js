import React from "react";
import styled from "styled-components";
import * as s from "../styles/variables";

export default function ShopProduct({ node }) {
  console.log(node);
  return (
    <Product>
      <h1>{node.title}</h1>
      <img src={node.images.edges[0].node.src} width="200" />
      <p>{node.description}</p>
      Add to cart <button>+</button>
    </Product>
  );
}

const Product = styled.div`
  width: 300px;
  border: 1px solid ${s.grey};
  margin: 2vh;
  padding: 2vh;
  border-radius: 15px;
`;
