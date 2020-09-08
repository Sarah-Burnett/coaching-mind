export default (url, callback) => {
    fetch(url)
        .then(res => res.json())
        .then(res => callback(res))
}