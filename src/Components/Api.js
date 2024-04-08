import axios from "axios";

const baseURL = "https://ccl-mini-project.onrender.com/";
// const baseURL = "http://localhost:3177";

export default axios.create({ baseURL: baseURL });
