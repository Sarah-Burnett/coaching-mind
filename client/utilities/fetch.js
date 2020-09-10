export default (url, resolve, reject = () => {}) => {
	fetch(url)
		.then((res) => res.json())
		.then((res) => resolve(res))
		.catch((err) => reject(err));
};
