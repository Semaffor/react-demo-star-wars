import axios from 'axios';

import { URL_ROOT } from './Constants';

const axiosBaseURL = axios.create({
	baseURL: URL_ROOT
});

export default axiosBaseURL;
