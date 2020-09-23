export default (req, res) => {
	res.statusCode = 200;
	res.json([
		{
			title: "Info",
			links: [
				{
					text: "Coaching",
					url: "/coaching",
				},
				{
					text: "Blog",
					url: "/blog",
				},
				{
					text: "FAQ",
					url: "/faq",
				},
			],
		},
		{
			title: "About",
			links: [
				{
					text: "About us",
					url: "/about",
				},
				{
					text: "Our Team",
					url: "/team",
				},
				{
					text: "Our Coaches",
					url: "/coaches",
				},
			],
		},
		{
			title: "Action",
			links: [
				{
					text: "Contact us",
					url: "/#contact",
				},
				{
					text: "Become a coach",
					url: "/join/coach",
				},
				{
					text: "Become a partner",
					url: "/join/school",
				},
				{
					text: "Vacancies",
					url: "/careers",
				},
			],
		},
	]);
};
