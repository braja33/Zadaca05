import { ACCESS_KEY_API_URL, SINGLE_PHOTO } from "../../utils/endpoints";

export const getData = async () => {
	const response = await fetch(ACCESS_KEY_API_URL);
	console.log("Odgovor iz repa", response);
	return await response.json();
};

export const getSingleData = async (id) => {
	const response = await fetch(SINGLE_PHOTO + id);
	console.log("Odgovor iz repa za signle photo", response);
	return await response.json();
};
