import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FilledButton, Error } from "../styles/components";
import * as s from "../styles/variables";

const Section = styled.section`
	background: ${s.purple};
`;

const Form = styled.form`
	height: 70vh;
	width: 90vw;
	margin: auto;
	background: ${s.purple};
	color: ${s.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	button {
		width: 85vw;
	}
	@media(min-width: ${s.tablet}){
		width: 50vw;
		button {
			width: auto;
		}
	}
`;

export default function Login({ auth, auth: { isAuth, role }, setAuth }) {
	const router = useRouter();
	const [formValues, setFormValues] = useState({
		identifier: "",
		password: "",
	});
	const [errors, setErrors] = useState();
	const handleChange = (event) => {
		event.persist();
		setErrors();
		setFormValues((prev) => ({
			...prev,
			[event.target.id]: event.target.value,
		}));
	};
	const getErrors = (data) => {
		return data
			? data.map((item) => item.messages.map((item) => item.message))
			: ["Error. Please try again."];
	};
	const login = async (event) => {
		event.preventDefault();
		const res = await fetch("http://localhost:1337/auth/local", {
			//TODO: remove hardcoded url
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formValues),
		});
		const data = await res.json();
		res.status === 200
			? setAuth({
					isAuth: true,
					jwt: data.jwt,
					role: data.user.role.type,
					username: data.user.username,
			  })
			: setErrors(() => getErrors(data.data));
	};
	useEffect(() => {
		if (isAuth) router.replace(`./${role}`);
	}, [auth]);
	useEffect(() => {
		router.prefetch("/coach");
	}, []);
	return (
		<Section>
			<Form onSubmit={login} noValidate>
				<h3>Login</h3>
				<Error>
					{errors && errors.map((error) => <span key={error}>{error}</span>)}
				</Error>
				<label htmlFor="identifier">Username or Email</label>
				<input
					id="identifier"
					value={formValues.identifier}
					onChange={handleChange}
					required
					placeholder="Username or Email"
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={formValues.password}
					onChange={handleChange}
					placeholder="Password"
					required
				/>
				<FilledButton color="purple">Login</FilledButton>
			</Form>
		</Section>
	);
}

const json = {
	jwt:
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk5ODI0MzYxLCJleHAiOjE2MDI0MTYzNjF9._dGj80ygnXiITuM25-71x5007PtSk0sFd0FHe8GGkd8",
	user: {
		id: 1,
		username: "s.burnett",
		email: "sarahkvburnett@gmail.com",
		provider: "local",
		confirmed: true,
		blocked: false,
		role: {
			id: 4,
			name: "Coach",
			description: "",
			type: "coach",
			created_by: null,
			updated_by: null,
		},
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
		created_at: "2020-09-09T13:19:39.861Z",
		updated_at: "2020-09-11T09:38:00.712Z",
	},
};
