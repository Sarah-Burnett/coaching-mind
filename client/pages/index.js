import Head from "next/head";
import findComponent from "../utilities/findComponent";
import BlogCard from "../components/BlogCard";
import ThreeGrid from "../components/ThreeGrid";
import Contact from "../components/Contact";

export default function Index({ posts, index }) {
	return (
		<>
			<Head>
				<title>Coaching Mind</title>
			</Head>
			{index.map(({ component, props }, index) => {
				const Component = findComponent(component);
				return <Component key={index} {...props} />;
			})}
			{posts && (
				<ThreeGrid
					heading="Find out more on our Blog"
					grid={posts}
					Component={BlogCard}
				/>
			)}
			<Contact />
		</>
	);
}

export async function getStaticProps() {
	const indexJson = await fetch("http://localhost:3000/api/home"); //TODO: remove hardcoded urls
	const index = await indexJson.json();
	const postsJson = await fetch(
		process.env.NEXT_PUBLIC_STRAPI_URL +
			"/posts?_limit=3&_sort=publishedAt:DESC"
	);
	const posts = await postsJson.json();
	return { props: { posts, index } };
}
