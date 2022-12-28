import { URL_IMG_CHARACTER, URL_PEOPLE } from '../API/config/Constants';

const getId = (url, category) => {
	const strWithSleshes = url.substring(url.indexOf(category + '/')).replace(category, '');
	return strWithSleshes.replace(/\//g, '');
};

export const getPeopleId = url => getId(url, URL_PEOPLE);
export const getPeopleImageUrl = id => URL_IMG_CHARACTER.replace(' ', id);
