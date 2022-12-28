import axiosBase from './config/BaseAxios';
import AbstractService from './AbstractService';

export default class PeopleService {
	static async getPeople() {
		return await AbstractService.handleRequest(axiosBase.get, '/people');
	}
}
