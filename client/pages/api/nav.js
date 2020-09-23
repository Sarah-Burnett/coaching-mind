export default (req, res) => {
	res.statusCode = 200;
	res.json([
		{
			text: "About",
			component: "A",
			url: "/about",
		},
		{
			text: "Blog",
			component: "A",
			url: "/blog",
		},
		{
			text: "Contact",
			component: "A",
			url: "/#contact",
		},
		{
			text: "Login",
			component: "A",
			url: "/login",
		},
		{
			text: "Join",
			component: "TransparentButton",
			url: "/#join",
		},
	]);
};
