export default (req, res) => {
	res.statusCode = 200;
	res.json([
		{
			text: "About us",
			component: "A",
		},
		{
			text: "For Schools",
			component: "A",
		},
		{
			text: "For Coaches",
			component: "A",
		},
		{
			text: "Login",
			component: "A",
		},
		{
			text: "Contact",
			component: "TransparentButton",
		},
	]);
};
