import styled from "styled-components";
import * as s from "../styles/variables";
import { Heading } from "../styles/components";
import FAQ from "../components/FAQ";

export default function faq() {
	return (
		<>
			<Heading color="blue">FAQ</Heading>
			<Buttons>
				{questions.map(({ title, id }) => (
					<a href={"#" + id}>
						<img src="https://plchldr.co/i/250x250" alt="" />
						{title}
					</a>
				))}
			</Buttons>
			<Questions>
				{questions.map((section) => (
					<Topic id={section.id} key={section.id}>
						<Title>{section.title}</Title>
						{section.questions.map((question) => (
							<FAQ key={question} question={question} />
						))}
					</Topic>
				))}
			</Questions>
		</>
	);
}

const Buttons = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	padding: 0 ${s.wPadding};
	min-height: 45vh;
	a {
		width: 250px;
		text-align: center;
		padding: 30px;
		margin: auto;
		max-width: 100%;
		font-size: smaller;
	}
	img {
		border-radius: 50%;
		width: 100%;
		margin-bottom: 15px;
	}
	@media (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const Questions = styled.section`
    background: ${s.grey};
`;

const Topic = styled.div`
	padding: 15vh ${s.wPadding} 0;
`;

const Title = styled.h2`
	border-bottom: 1px solid ${s.black};
	text-align: left;
	line-height: 2;
	color: ${s.blue};
	padding-top: 2vh;
`;

const questions = [
	{
		title: "The basics",
		id: "basics",
		questions: [
			{
				q: "What is Coaching-Mind?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "What is social mobility?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "How long does the programme last?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "Does the programme work?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
		],
	},
	{
		title: "I have a problem",
		id: "problem",

		questions: [
			{
				q: "I cannot login",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "I cannot see my coach/coachee",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "I cannot review my coaching session",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
		],
	},
	{
		title: "Want to partner with us",
		id: "partner",
		questions: [
			{
				q: "How do I get my school/workplace involved with this project",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "How do you select your coaches?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "How long does the programme last?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "Are you COVID-secure?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
		],
	},
	{
		title: "Want to join our team",
		id: "join",
		questions: [
			{
				q: "What job openings do you have?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "How do I join as a volunteer?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
			{
				q: "Are you COVID-secure?",
				a: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus,
                    aliquam itaque aperiam dolorem possimus incidunt eveniet nam rerum aspernatur
                    doloribus laudantium! Error cumque libero aliquam! Beatae facere veritatis
                    laborum.`,
			},
		],
	},
];
