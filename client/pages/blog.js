import { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import BlogPost from "../components/BlogPost";

const Error = styled.div`
	height: 70vh;
	color: red;
`;

const Loading = styled.div`
	height: 70vh;
`;

export default function Blog() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const addPosts = (post) => setPosts(posts);

	const fetchPosts = async () => {
		const res = await fetch("http://localhost:1337/posts"); //TODO: edit this to .env
		const posts = await res.json();
		setPosts(posts);
	}
	useEffect( () => {
		try {
			fetchPosts();
		} catch {
			setError(true);
		}
		setLoading(false);
	}, []);
	return (
		<div>
			<Head>
				<title>Coaching Mind</title>
			</Head>
			<Nav />
			<main>
				{error && <Error>No posts found. Please refresh to try again</Error>}
				{loading && <Loading>Loading posts ...</Loading>}
				{posts.map((post) => (
					<BlogCard key={post.id} post={post}>{post.id}</BlogCard>
				))}
			</main>
			<Footer />
		</div>
	);
}
