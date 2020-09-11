import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Coach({ auth: { isAuth, jwt, username } }) {
	const router = useRouter();
	useEffect(() => {
		isAuth ? fetchCoach() : router.replace("/login");
	}, []);
	let coach = null;
	const fetchCoach = async () => {
		const res = await fetch(
			`http://localhost:1337/coaches?username=${username}`,
			{
				headers: {
					"Authorization": `Bearer ${jwt}`
				},
			}
		);
		coach = await res.json();
	};
	return (
		<div>
			{coach ? <div>{coach}</div> : <h3>Hi Coach, thanks for logging in</h3>}
		</div>
	);
}

const coachjson = [
	{
		id: 1,
		programme: {
			id: 1,
			name: "St Andrews",
			introDate: "2020-10-01T11:00:00.000Z",
			gradDate: "2020-12-10T14:00:00.000Z",
			firstSession: "2020-10-08T11:00:00.000Z",
			coachee: 1,
			programmeId: "ANDOCT20",
			current: true,
			created_by: 1,
			updated_by: 1,
			created_at: "2020-09-11T09:32:36.638Z",
			updated_at: "2020-09-11T10:01:06.451Z",
		},
		user: {
			id: 1,
			username: "s.burnett",
			email: "sarahkvburnett@gmail.com",
			provider: "local",
			confirmed: true,
			blocked: false,
			role: 4,
			created_by: 1,
			updated_by: 1,
			created_at: "2020-09-09T13:19:39.861Z",
			updated_at: "2020-09-11T09:38:00.712Z",
		},
		coachee: {
			id: 1,
			firstName: "Macey",
			coach: 1,
			programme: 1,
			subject: "Maths",
			coacheeId: "COMR0001",
			current: true,
			user: 2,
			created_by: 1,
			updated_by: 1,
			created_at: "2020-09-11T10:00:13.046Z",
			updated_at: "2020-09-11T10:01:06.485Z",
		},
		coachId: "COSB0001",
		current: true,
		firstName: "Sarah",
		created_by: {
			id: 1,
			firstname: "Sarah",
			lastname: "Burnett",
			username: null,
		},
		updated_by: {
			id: 1,
			firstname: "Sarah",
			lastname: "Burnett",
			username: null,
		},
		created_at: "2020-09-11T09:37:06.864Z",
		updated_at: "2020-09-11T10:01:06.449Z",
	},
];