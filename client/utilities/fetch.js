export default ({ url, method, body, resolve, reject}) => {
	if (!method) method = "GET";
	if (!reject) reject = () => { };
	fetch(url, {
		method,
		headers: {
			"Content-Type": "application/json",
		},
		body
	})
		.then((res) => res.json())
		.then((res) => resolve(res))
		.catch((err) => reject(err));
};
