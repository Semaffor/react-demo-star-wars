import axiosBase from './config/BaseAxios';
import AbstractService from './AbstractService';
import axios from 'axios';

export default class PeopleService {
	static async getPeople() {
		return await AbstractService.handleRequest(axiosBase.get, '/people');
	}
}
