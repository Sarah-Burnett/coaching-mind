import Head from "next/head";
import findComponent from "../utilities/findComponent";
import BlogCard from "../components/BlogCard";
import ThreeGrid from "../components/ThreeGrid";
import Contact from "../components/Contact";

export default function Index({ posts }) {
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
	const data = await fetch(
		process.env.NEXT_PUBLIC_STRAPI_URL +
			"/posts?_limit=3&_sort=publishedAt:DESC"
	);
	const posts = await data.json();
	return { props: { posts } };
}

const index = [
	{
		component: "FullImg",
		props: {
			img: ["/virtual-learning.jpg", "/virtual-learning-mob.jpg"],
			text: {
				heading: "Our new virtual coaching platform",
				p:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
					"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
					"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
				button: "Become a virtual coach",
			},
		},
	},
	{
		component: "Video",
		props: {
			img: "https://plchldr.co/i/800x400",
			text: {
				heading: "Watch our video to find out more:",
			},
		},
	},
	{
		component: "TwoGrid",
		props: {
			img: "/primary.jpg",
			text: {
				heading: "Coaching in Primary Schools",
				p:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
					"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
					"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
				button: "About our Primary programme",
				color: "green",
			},
		},
	},
	{
		component: "TwoGrid",
		props: {
			reverse: true,
			img: "/secondary.jpg",
			text: {
				heading: "Coaching in Secondary Schools",
				p:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
					"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
					"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
				button: "About our Secondary programme",
				color: "blue",
			},
		},
	},
	{
		component: "TwoGrid",
		props: {
			img: "/workplace.jpg",
			text: {
				heading: "Coaching in the Workplace",
				p:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
					"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
					"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
				button: "About our Workplace programme",
				color: "purple",
			},
		},
	},
];