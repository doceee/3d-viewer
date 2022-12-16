import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    withCredentials: false
});
console.log(`${process.env.REACT_APP_API_URL}`);
instance.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

export default instance;
