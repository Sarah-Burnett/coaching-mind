import { productsQuery, shopQuery } from "../utilities/queries";

export default function Shop({products}) {
	console.log(products);
	return (<div>SHOP MATE</div>);
}

export async function getStaticProps() {
	console.log(process.env.NEXT_PUBLIC_SHOPIFY_URL);
	const data = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_URL, {
		method: "POST",
		headers: {
			"X-Shopify-Storefront-Access-Token":
				process.env.NEXT_PUBLIC_SHOPIFY_TOKEN,
			Accept: "application/json",
			"Content-Type": "application/graphql",
		},
		body: JSON.stringify(shopQuery),
	});
	const products = await data.json();
	console.log(products);
	return { props: { products } };
}
