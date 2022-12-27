import axios from "axios";

const axiosBaseURL = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export default axiosBaseURL