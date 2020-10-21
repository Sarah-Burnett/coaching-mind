import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Heading, Paper } from "../../styles/components";
import { DayTime, MonthDayYear } from "../../components/Dates";

export default function Coach({
	authProp: {
		auth: { isAuth, jwt, username, role },
	},
}) {
	const [coach, setCoach] = useState();
	const router = useRouter();
	useEffect(() => {
		if (isAuth) {
			role === "coach" ? fetchCoach() : router.replace(`/${role}`);
		} else router.replace("/login");
	}, []);
	const fetchCoach = async () => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/coaches?user.username=${username}`,
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
		<>
			<Heading color="blue">Coach</Heading>
			{coach && (
				<Paper>
					<ul>
						<li>
							<div></div>
						</li>
						<li>
							<div>
								<h4>Name:</h4>
								<span>{coach.firstName}</span>
							</div>
						</li>
						<li>
							<div>
								<h4>Role:</h4>
								<span>{role}</span>
							</div>
						</li>
						<li>
							<div>
								<h4>Coachee:</h4> <span>{coach.coachee.firstName}</span>
							</div>
						</li>
						<li>
							<div>
								<h4>Programme:</h4> <span>{coach.programme.name}</span>
							</div>
						</li>
						<li>
							<div>
								<h4>First Session:</h4>
								<MonthDayYear date={coach.programme.firstSession} />
							</div>
						</li>
						<li>
							<div>
								<h4>Session time:</h4>
								<DayTime date={coach.programme.firstSession} />
							</div>
						</li>
						<li>
							<div>
								<h4>Graduation:</h4>
								<MonthDayYear date={coach.programme.gradDate} />
							</div>
						</li>
						<li>
							<div></div>
						</li>
					</ul>
				</Paper>
			)}
		</>
	);
}
