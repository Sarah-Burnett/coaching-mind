export default async (req, res) => {
	res.status = 200;
	res.json([
		{
			component: "Paper",
			props: {
				list: [
					{
						heading: "Name",
						field: {
							component: "Moment",
							value: "",
						},
					},
				],
			},
		},
	]);
};
