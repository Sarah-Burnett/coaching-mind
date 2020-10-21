import BlogPost from "../../components/BlogPost";

export default function Post({ post }) {
	return <BlogPost post={post} />;
}

export async function getStaticPaths() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`);
	const posts = await res.json();
	const paths = posts.map((post) => ({ params: { slug: post.slug } }));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?slug=${params.slug}`
	);
	const posts = await res.json();
	const post = posts[0];
	return { props: { post } };
}
