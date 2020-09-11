export default (req, res) => {
	res.statusCode = 200;
	res.json([
		{
			text: "About us",
			component: "A",
			url: "/about",
		},
		{
			text: "For Schools",
			component: "A",
			url: "/schools",
		},
		{
			text: "For Coaches",
			component: "A",
			url: "/coaches",
		},
		{
			text: "Login",
			component: "A",
			url: "/login",
		},
		{
			text: "Contact",
			component: "TransparentButton",
			url: "/#contact",
		},
	]);
};
