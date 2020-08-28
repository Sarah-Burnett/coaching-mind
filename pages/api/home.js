export default (req, res) => {
	res.statusCode = 200;
	res.json([
		{
			component: "FullImg",
			props: {
				img: "https://plchldr.co/i/800x250",
				text: {
					heading: "Our new virtual coaching platform",
					p:
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
						"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
						"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
					button: "Become a virtual coach",
				},
			},
		},
		{
			component: "Video",
			props: {
				img: "https://plchldr.co/i/800x250",
				text: {
					heading: "Watch our video to find out more:",
				},
			},
		},
		{
			component: "TwoGrid",
			props: {
				img: "https://plchldr.co/i/800x250",
				text: {
					heading: "Coaching in Primary Schools",
					p:
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
						"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
						"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
					button: "About our Primary programme",
					color: "green",
				},
			},
		},
		{
			component: "TwoGrid",
			props: {
				reverse: true,
				img: "https://plchldr.co/i/800x250",
				text: {
					heading: "Coaching in Secondary Schools",
					date:
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
						"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
						"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
					button: "About our Secondary programme",
					color: "blue",
				},
			},
		},
		{
			component: "TwoGrid",
			props: {
				img: "https://plchldr.co/i/800x250",
				text: {
					heading: "Coaching in the Workplace",
					p:
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
						"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
						"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
					button: "About our Workplace programme",
					color: "purple",
				},
			},
		},
		{
			component: "ThreeGrid",
			props: {
				text: {
					heading: "Find out more on our Blog",
					grid: [
						{
							title: "Mindful learning in schools",
							img: "https://plchldr.co/i/300x300",
							date: "28 Aug 20",

							url: "",
						},
						{
							title: "Virtual Coaching: Lessons so far",
							img: "https://plchldr.co/i/300x300",
							date: "26 Aug 20",
							url: "",
						},
						{
							title: "Moving forward from Results day",
							img: "https://plchldr.co/i/300x300",
							date: "23 Aug 20",
							url: "",
						},
					],
				},
			},
		},
	]);
};
