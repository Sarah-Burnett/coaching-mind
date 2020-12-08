import { Heading } from "../../styles/components";
import Head from "next/head";
import Notepad from "../../components/Notepad";
import findComponent from "../../utilities/findComponent";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import useAuth from "../../utilities/useAuth";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import styled from "styled-components";

export default function Coach() {
	const [coach, setCoach] = useState(false);
	const { auth, isAuth, loginFromCookie } = useAuth();
	const router = useRouter();
	const fetchCoach = async (user) => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/coaches?user.username=${user.username}`,
			{
				headers: {
					Authorization: `Bearer ${user.jwt}`,
				},
			}
		);
		const data = await response.json();
		setCoach({
			Name: data[0].firstName,
			Role: "Coach",
			Coachee: data[0].coachee.firstName,
			Programme: data[0].programme.name,
			"First Session": format(
				new Date(data[0].programme.firstSession),
				"dd/MM/yy"
			),
			"Session Time": format(new Date(data[0].programme.firstSession), "HH:mm"),
			Graduation: format(new Date(data[0].programme.gradDate), "dd/MM/yy"),
		});
	};
	useEffect(() => {
		if (!isAuth) {
			const user = loginFromCookie();
			if (!user) router.replace("/login");
			else fetchCoach(user);
		} else fetchCoach(auth);
	}, []);
	return (
		<>
			<Head>
				<title>Coach | Coaching Mind</title>
			</Head>
			<>
				{coach && (
					<>
						<Heading color="blue"> Coach</Heading>
						<Notepad props={coach}></Notepad>
						{coachPage.map(({ component, props }, index) => {
							const Component = findComponent(component);
							return <Component key={index} {...props} />;
						})}
					</>
				)}
				{!coach && <Loading color="blue" />}
			</>
		</>
	);
}

const coachPage = [
	{
		component: "TwoGrid",
		props: {
			img: "https://plchldr.co/i/400",
			text: {
				heading: "Report",
				p:
					"Fill out our feedback form to report how your coaching sessions are progressing",
				button: "Report",
				color: "green",
			},
			link: "/coach/report",
		},
	},
	{
		component: "TwoGrid",
		props: {
			img: "https://plchldr.co/i/339",
			text: {
				heading: "Read",
				p: "Find out more about our programme and find tips in our blog",
				button: "Read our blog",
				color: "purple",
			},
			reverse: true,
			link: "/blog",
		},
	},
	{
		component: "TwoGrid",
		props: {
			img: "https://plchldr.co/i/401",
			text: {
				heading: "Review",
				p: "Review our coaching materials for inspiration for your sessions",
				button: "Take me to materials",
				color: "blue",
			},
			link: "https://www.dropbox.com/en_GB/?_hp=c",
		},
	},
];
