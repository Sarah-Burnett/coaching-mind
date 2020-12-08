import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FilledButton } from "../styles/components";
import * as s from "../styles/variables";
import Head from "next/head";
import fetch from "../utilities/fetch";
import { animated } from "react-spring";
import Error from "../components/Error";
import useAuth from "../utilities/useAuth";
import useHeightTransition from "../utilities/useHeightTransition";

export default function Login() {
	const { auth, isAuth, role, login } = useAuth();
	const router = useRouter();
	const [formValues, setFormValues] = useState({
		identifier: "",
		password: "",
	});
	const [errors, setErrors] = useState();
	const [isSending, setIsSending] = useState(false);
	const handleChange = (event) => {
		event.persist();
		setErrors();
		setFormValues((prev) => ({
			...prev,
			[event.target.id]: event.target.value,
		}));
	};
	const getErrors = (data) => {
		console.log(data);
		return data
			? data.map((item) => item.messages.map((item) => item.message))
			: ["Error. Please try again."];
	};
	const showLoginSuccess = (data) =>
		login({
			jwt: data.jwt,
			role: data.user.role.type,
			username: data.user.username,
		});
	const showLoginFailure = (data) => setErrors(() => getErrors(data.data));
	const loginUser = async (event) => {
		event.preventDefault();
		setIsSending(true);
		await fetch({
			url: process.env.NEXT_PUBLIC_STRAPI_URL + "/auth/local",
			method: "POST",
			body: JSON.stringify(formValues),
			resolve: showLoginSuccess,
			reject: showLoginFailure,
		});
		setIsSending(false);
	};
	const errorTransitions = useHeightTransition(errors);
	useEffect(() => {
		if (isAuth) router.replace(`/${role}`);
	}, [auth]);
	return (
		<>
			<Head>
				<title>Login | Coaching Mind</title>
			</Head>
			<Section>
				<Form onSubmit={loginUser} noValidate>
					<h1>Login</h1>
					{errorTransitions.map(
						({ item, key, props }) =>
							item && (
								<animated.div key={key} style={props}>
									<Error errors={errors} />
								</animated.div>
							)
					)}
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
					<div className="buttons">
						{isSending ? (
							<FilledButton disabled color="purple">
								Logging in...
							</FilledButton>
						) : (
							<FilledButton color="purple">Login</FilledButton>
						)}
					</div>
				</Form>
			</Section>
		</>
	);
}


const Section = styled.section`
	background: ${s.purple};
	min-height: 85vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Form = styled.form`
	width: 90vw;
	margin: auto;
	background: ${s.purple};
	color: ${s.white};
	button {
		width: 85vw;
	}
	@media (min-width: ${s.tablet}) {
		width: 50vw;
		button {
			width: auto;
		}
	}
	& > * {
		margin: 2vh 0;
	}
	h1 {
		padding: 5vh 0;
	}
	.buttons {
		text-align: center;
		padding: 3vh 0;
	}
	button {
		width: 100%;
		@media (min-width: ${s.desktop}) {
			width: auto;
		}
	}
`;
