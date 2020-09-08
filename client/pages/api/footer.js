export default (req, res) => {
	res.statusCode = 200;
	res.json([
		{
			title: "Info",
			links: [
				{
					text: "Coaching",
					url: "",
				},
				{
					text: "Social...",
					url: "",
				},
				{
					text: "Blog",
					url: "",
				},
				{
					text: "FAQ",
					url: "",
				},
			],
		},
		{
			title: "About",
			links: [
				{
					text: "About us",
					url: "",
				},
				{
					text: "Our Team",
					url: "",
				},
				{
					text: "Our Coaches",
					url: "",
				},
			],
		},
		{
			title: "Action",
			links: [
				{
					text: "Contact us",
					url: "",
				},
				{
					text: "Become a coach",
					url: "",
				},
				{
					text: "Become a partner",
					url: "",
				},
				{
					text: "Vacancies",
					url: "",
				},
			],
		},
	]);
};
