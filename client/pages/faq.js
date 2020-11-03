import styled from "styled-components";
import * as s from "../styles/variables";
import { Heading } from "../styles/components";
import FAQ from "../components/FAQ";

export default function faq() {
	return (
		<div>
			<Heading color="blue">FAQ</Heading>
			{questions.map((section) => (
				<Section key={section}>
					<Title>{section.title}</Title>
					{section.questions.map((question) => (
						<FAQ key={question} question={question} />
					))}
				</Section>
			))}
		</div>
	);
}

const Section = styled.div`
	width: 80%;
	margin: 5vh auto;
`;

const Title = styled.h2`
	border-bottom: 1px solid ${s.black};
	text-align: left;
	line-height: 2;
    color: ${s.blue};
`;

const questions = [
	{
		title: "The basics",
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
