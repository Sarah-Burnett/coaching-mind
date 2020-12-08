import Head from "next/head";
import { Heading } from "../styles/components";
import { productsQuery as query } from "../utilities/queries";
import ShopProduct from "../components/ShopProduct";
import styled from "styled-components";
import useCart from "../utilities/useCart";
import ShopCart from "../components/ShopCart";

export default function Shop({ products }) {
  const { isCartOpen } = useCart();
  console.log(products[0].node.images);
  return (
    <>
      <Head>
        <title>Shop | Coaching Mind</title>
      </Head>
      <Heading color="green">Shop</Heading>
      <Products>
        {products.map(({ node }) => (
          <ShopProduct key={node.id} node={node} />
        ))}
      </Products>
      {isCartOpen && <ShopCart />}
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_URL, {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  let products = await data.json();
  products = products.data.products.edges;
  return { props: { products } };
}

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
