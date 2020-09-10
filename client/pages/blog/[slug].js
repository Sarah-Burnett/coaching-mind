import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BlogPost from "../../components/BlogPost";

export default function Post() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [post, setPost] = useState();
	const { slug } = useRouter().query;
	const fetchPost = async () => {
		const res = await fetch(`http://localhost:1337/posts?slug=${slug}`);
		const post = await res.json();
		setPost(post[0]);
	};
	useEffect(() => {
		try {
			fetchPost();
		} catch {
			setError(false);
		}
		setLoading(false);
	}, []);
	return (
		<main>
			{loading && <div>Loading Post </div>}
			{error && <div>Error</div>}
			{post && <BlogPost post={post} />}
		</main>
	);
}

Post.getInitialProps = async () => {
	return {};
};
