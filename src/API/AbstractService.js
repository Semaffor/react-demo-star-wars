import axiosBaseURL from "./config/BaseAxios";

export default class AbstractService {

    static async handleRequest(callback, uri) {
        try {
            const response = await callback(uri);
            return response.data;
        } catch (error) {
            console.error('Path:' + uri + ' Error: ', error.message);
            return false;
        }
    }
}