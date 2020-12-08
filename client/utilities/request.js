import axios from "axios";

export default function request({ url, method, data, resolve, reject }) {
  if (!method) method = "GET";
  if (!reject) reject = () => {};
  axios(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  })
    .then((res) => resolve(res.data))
    .catch((err) => reject(err.response.data.data));
}
