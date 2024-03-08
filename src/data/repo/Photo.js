import {
	ACCESS_KEY_API_URL,
	API_URL,
	ACCESS_KEY,
	SEARCH_QUERY_API,
} from "../../utils/endpoints";

export const getData = async () => {
	const response = await fetch(ACCESS_KEY_API_URL);

	return await response.json();
};

export const getSingleData = async (id) => {
	const response = await fetch(API_URL + id + "?" + ACCESS_KEY);

	return await response.json();
};

export const getSearchedData = async (query) => {
	const response = await fetch(SEARCH_QUERY_API + query + "&" + ACCESS_KEY);
	console.log("Odgovor iz repa za tražen pojam", response);
	return await response.json();
};
