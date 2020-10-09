import styled from "styled-components";
import * as s from "../styles/variables";
import Head from "next/head";
import BlogCard from "../components/BlogCard";
import FullImg from "../components/FullImg";
import { FilledButton, Heading } from "../styles/components";
import { useState } from "react";
import { Search } from "react-feather";
import { useRouter } from "next/router";

export default function Blog({ posts }) {
	const router = useRouter();
	const [visiblePosts, setVisiblePosts] = useState(posts);
	const [isFiltered, setIsFiltered] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const handleChange = (event) => setSearchValue(event.target.value);
	const applySearch = (event) => {
		event.preventDefault();
		setVisiblePosts((prev) =>
			prev.filter(({ title }) =>
				title.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
		setIsFiltered(true);
	};
	const removeSearch = () => {
		setVisiblePosts(posts);
		setIsFiltered(false);
		setSearchFalue("");
	};
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<Heading color="purple">Blog</Heading>
			<SearchBar onSubmit={applySearch}>
				<Search />
				{isFiltered ? (
					<Button>
						{searchValue}
						<span onClick={removeSearch}>&times;</span>
					</Button>
				) : (
					<input
						value={searchValue}
						onChange={handleChange}
						placeholder="Search"
					/>
				)}
			</SearchBar>
			<Wrapper>
				{visiblePosts.length > 0 ? (
					visiblePosts.map((post) => <BlogCard key={post.id} item={post} />)
				) : (
					<FullImg
						img={["./error.jpg", "./error.jpg"]}
						text={{
							heading: "No posts found",
							p: "Sadly no blog posts matching your search",
							button: "Try again",
						}}
						click={() => router.push("/blog")}
					/>
				)}
			</Wrapper>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/posts");
	const posts = await res.json();
	return { props: { posts } };
}

const Wrapper = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-column-gap: 4vh;
	color: ${s.blue};
	padding: 0 ${s.wPadding};
	margin-bottom: 4vh;
`;

const SearchBar = styled.form`
	display: flex;
	align-items: center;
	border: 1px solid ${s.grey};
	border-radius: 15px;
	margin: 4vh ${s.wPadding} 0;
	padding: 1vh 4vw;
	color: ${s.blue};
	&:focus,
	&:hover {
		border-color: #000;
	}
	input {
		margin-left: 2vw;
		border: none;
		outline: none;
		color: ${s.blue};
	}
	button {
		margin-left: 2vw;
	}
`;

const Button = styled(FilledButton)`
	background: ${s.blue};
	color: ${s.white};
	min-width: 150px;
	padding-right: 1vw;
	span {
		margin-left: 2vw;
		transition: all 0.3s;
		opacity: 0;
	}
	&:hover {
		span {
			opacity: 1;
		}
	}
`;
