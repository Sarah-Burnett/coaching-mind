import Head from "next/head";
import findComponent from "../utilities/findComponent";
import dynamic from "next/dynamic";
const BlogCard = dynamic(() => import("../components/BlogCard"));
const ThreeGrid = dynamic(() => import("../components/ThreeGrid"));
const Contact = dynamic(() => import("../components/Contact"));

export default async function Index() {
	const data = await fetch(
		process.env.NEXT_PUBLIC_STRAPI_URL +
			"/posts?_limit=3&_sort=publishedAt:DESC"
	);
	const posts = await data.json();
	console.log(posts);
	return (
		<>
			<Head>
				<title>Home | Coaching Mind</title>
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

// export async function getStaticProps() {
// 	const data = await fetch(
// 		process.env.NEXT_PUBLIC_STRAPI_URL +
// 			"/posts?_limit=3&_sort=publishedAt:DESC"
// 	);
// 	const posts = await data.json();
// 	return { props: { posts } };
// }

const index = [
	{
		component: "FullImg",
		props: {
			img: [
				"https://coaching-mind.s3.eu-west-2.amazonaws.com/virtual_learning_8dc9b94e43.jpg",
				"https://coaching-mind.s3.eu-west-2.amazonaws.com/virtual_learning_mob_94c1b711cb.jpg",
			],
			text: {
				heading: "Our new virtual coaching platform",
				p:
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
					"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
					"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
				button: "Become a virtual coach",
			},
			link: "/join",
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
			img:
				"https://coaching-mind.s3.eu-west-2.amazonaws.com/primary_kid_at_desk_34af8e36df.jpg",
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
			img:
				"https://coaching-mind.s3.eu-west-2.amazonaws.com/secondary_kids_at_laptop_78108e4071.jpg",
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
			img:
				"https://coaching-mind.s3.eu-west-2.amazonaws.com/work_meeting_ae235dbb2d.jpg",
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
