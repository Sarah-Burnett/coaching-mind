import { useState } from "react";
import styled from "styled-components";
import * as s from "../styles/variables";
import { FilledButton } from "../styles/components";
import fetch from "../utilities/fetch";
import Error from "./Error";
import { useTransition, animated } from "react-spring";

export default function Contact() {
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [errors, setErrors] = useState([]);
	const showSubmitSuccess = () => {
		setFormValues({
			name: "",
			email: "",
			message: "",
		});
		setIsSent(true);
	};
	const showSubmitFailure = () => {
		setErrors(["Sorry! Form did not submit. Please try again"]);
	};
	const submit = async (event) => {
		event.preventDefault();
		setErrors([]);
		const form = event.target;
		if (!formValues.name || !formValues.email || !formValues.message)
			return setErrors(["Please fill in all fields"]);
		//TODO: handle errors for these and add better email validation
		if (!formValues.email.includes("@") || !formValues.email.includes("."))
			return setErrors(["Please add a valid email address"]);
		setIsSending(true);
		return fetch({
			url: form.action,
			method: "POST",
			body: JSON.stringify(formValues),
			resolve: showSubmitSuccess,
			reject: showSubmitFailure,
		});
	};
	const handleChange = (event) => {
		event.persist();
		setErrors([]);
		setFormValues((prev) => ({
			...prev,
			[event.target.id]: event.target.value,
		}));
	};
	const errorTransitions = useTransition(errors, null, {
		from: { height: 0, opacity: 0 },
		enter: { height: "auto", opacity: 1 },
		leave: [{ opacity: 0 }, { height: 0 }],
	});
	return (
		<Form
			id="contact"
			onSubmit={submit}
			noValidate
			method="POST"
			action="https://formspree.io/f/xvovajbn"
		>
			<h1>Contact us</h1>
			{errorTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div key={key} style={props}>
							<Error errors={errors} />
						</animated.div>
					)
			)}
			{isSent ? (
				<div id="success">
					<p>Your message has sent</p>
					<p>Thank you for contacting us</p>
					<p>We will be in touch ASAP within 2 working days</p>
				</div>
			) : (
				<>
					<div>
						<input
							id="name"
							placeholder="Name"
							value={formValues.name}
							onChange={handleChange}
							required
						/>
						<input
							id="email"
							placeholder="Email"
							value={formValues.email}
							onChange={handleChange}
							type="email"
							required
						/>
					</div>
					<textarea
						id="message"
						placeholder="Message..."
						value={formValues.message}
						onChange={handleChange}
						required
					/>
					<div>
						{isSending ? (
							<FilledButton disabled color="blue">
								Sending...
							</FilledButton>
						) : (
							<FilledButton color="blue">Send</FilledButton>
						)}
					</div>
				</>
			)}
		</Form>
	);
}

const Form = styled.form`
	background: ${s.blue};
	min-height: 60vh;
	padding: 15vh ${s.wPadding};
	color: ${s.white};
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		input {
			margin-bottom: 2vw;
		}
	}
	textarea {
		min-height: 40vh;
	}
	button {
		margin: 4vh 0;
		width: 90vw;
	}
	@media (min-width: ${s.tablet}) {
		div {
			flex-direction: row;
			input:nth-child(1) {
				margin-right: 2vw;
			}
		}
		button {
			width: auto;
		}
	}
	#success {
		display: block;
		text-align: center;
	}
`;
