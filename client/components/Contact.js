import { useState } from "react";
import styled from "styled-components";
import * as s from "../styles/variables";
import { FilledButton, Error } from "../styles/components";

export default function Contact() {
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("pending");
	const [errors, setErrors] = useState([]);
	const submit = (event) => {
		event.preventDefault();
		if (!formValues.name || !formValues.email || !formValues.message) return; //TODO: handle errors for these and add better email validation
		if (!formValues.email.includes('@') || !formValues.email.includes('.')) return;
		//TODO: check valid email
		setStatus("send");
		//TODO: submit contact form
		setFormValues({
			name: "",
			email: "",
			message: "",
		});
		setStatus("sent");
	};
	const handleChange = (event) => {
		event.persist();
		setErrors([]);
		setFormValues((prev) => ({
			...prev,
			[event.target.id]: event.target.value,
		}));
	};
	return (
		<Form id="contact" onSubmit={submit} noValidate>
			<h1>Contact us</h1>
			<Error>{errors && errors.map((error) => <span>{error}</span>)}</Error>
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
				{status === "pending" ? (
					<FilledButton color="blue">Send</FilledButton>
				) : (
					<FilledButton disabled color="blue">
						{status === "sending" ? "Sending..." : "Sent"}
					</FilledButton>
				)}
			</div>
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
`;
