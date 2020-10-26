import FullImg from "../components/FullImg";
import { useRouter } from "next/router";
import Head from "next/head";

export default function PageNotFound() {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Page Not Found | Coaching Mind</title>
			</Head>
			<FullImg
				img={[
					"https://coaching-mind.s3.eu-west-2.amazonaws.com/frustrated_girl_at_laptop_c7eb1f532b.jpg",
					"https://coaching-mind.s3.eu-west-2.amazonaws.com/frustrated_girl_at_laptop_c7eb1f532b.jpg",
				]}
				text={{
					heading: "Page Not Found",
					p: "This page is currently unavailable or still in development",
					button: "Back",
				}}
				click={() => router.back()}
			/>
		</>
	);
}
