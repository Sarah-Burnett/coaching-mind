import FullImg from "../components/FullImg";
import { useRouter } from "next/router";
import * as s from "../styles/variables";

export default function PageNotFound() {
	const router = useRouter();
	return (
		<FullImg
			img={["./error.jpg", "./error.jpg"]}
			text={{
				heading: "Page Not Found",
				p: "This page is currently unavailable or still in development",
				button: "Back",
			}}
			click={() => router.back()}
		/>
	);
}
