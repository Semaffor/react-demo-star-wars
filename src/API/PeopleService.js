import axiosBase from './config/BaseAxios';
import AbstractService from './AbstractService';
import axios from 'axios';
import { URL_IMG_CHARACTER } from './config/Constants';

export default class PeopleService {
	static async getPeople() {
		return await AbstractService.handleRequest(axiosBase.get, '/people');
	}

	static async getPeopleImage(url) {
		return await axios.get();
	}
}
