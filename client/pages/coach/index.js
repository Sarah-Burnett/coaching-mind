import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Coach({ auth: { isAuth, jwt, username } }) {
	const [coach, setCoach] = useState({});
	const router = useRouter();
	useEffect(() => {
		isAuth ? fetchCoach() : router.replace("/login");
	}, []);
	const fetchCoach = async () => {
		const res = await fetch(
			`http://localhost:1337/coaches?user.username=${username}`,
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			}
		);
		const coach = await res.json();
		setCoach(coach[0]);
	};
	return (
		<div>
			{coach && (
				<div>
					<h3>Hi {coach.firstName}, thanks for logging in.</h3>
					<p>
						Your current coachee is: {coach.coachee.firstName} at {coach.programme.name}
					</p>
				</div>
			)}
		</div>
	);
}
