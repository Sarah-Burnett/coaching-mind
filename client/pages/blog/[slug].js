import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BlogPost from "../../components/BlogPost";

export default function Post() {
	// const [loading, setLoading] = useState(true);
	// const [post, setPost] = useState();
	// const { slug } = useRouter().query;
	// console.log(slug);
	// const fetchPost = async () => {
	// 	const res = await fetch(`https://localhost:1337/posts?slug=${slug}`);
    //     const post = await res.json();
    //     return post;
    // };
    // useEffect(() => {
    //     const post = fetchPost();
    //     console.log(post);
    //     setPost(post);
    // }, [])
	// return (
	// 	<div>{loading ? <div>Loading Post </div> : <BlogPost post={post} />}</div>
    // );
    return (
        <div>Blog post</div>
    )
}
