export default function Index({ coachee }) {
	return <div>{coachee}</div>;
}

Index.getInitialProps = async () => {
	const res = await fetch("http://localhost:1337/coachees/", {
		method: "POST",
		body: {
			identifier: "user@strapi.io",
			password: "strapiPassword",
		},
	});
	const user = await res.json();
	return { coachee };
};
