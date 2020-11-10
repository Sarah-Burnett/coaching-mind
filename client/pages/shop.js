import { productsQuery as query } from "../utilities/queries";

export default function Shop({ products }) {
	console.log(products[0].node.images);
	return (
		<div>
			{products.map(({ node }) => (
				<div key={node.id}>
					<h1>{node.title}</h1>
					<img src={node.images.edges[0].node.src} width="200" />
					<p>{node.description}</p>
				</div>
			))}
		</div>
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
