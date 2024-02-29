import { ACCESS_KEY_API_URL } from "../../utils/endpoints";

export const getData = async () => {
	const response = await fetch(ACCESS_KEY_API_URL);
	console.log("Odgovor iz repa", response);
	return await response.json();
};
