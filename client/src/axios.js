import axios from "axios";

const instance = axios.create({
    baseURL: `https://long-cyan-cricket-ring.cyclic.app/`,
    withCredentials: false
});
console.log(`https://long-cyan-cricket-ring.cyclic.app/`);
instance.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

export default instance;
