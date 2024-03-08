import { getData, getSingleData, getSearchedData } from "../data/repo/Photo";

export const getPhotos = async () => {
	const photos = [];

	const result = await getData();

	result.forEach((element) => {
		photos.push({
			id: element.id,
			created_at: element.created_at,
			alt_description: element.alt_description,
			url_full: element.urls.full,
			thumb: element.urls.thumb,
		});
	});

	return photos;
};

export const getPhotoById = async (id) => {
	const result = await getSingleData(id);
	return result;
};

export const getSearchedPhotos = async (query) => {
	const photos = [];

	const result = await getSearchedData(query);
	console.log("Odgovor iz servisa raspakirani repo", result);
	result.forEach((element) => {
		photos.push({
			id: element.id,
			created_at: element.created_at,
			alt_description: element.alt_description,
			url_full: element.urls.full,
			thumb: element.urls.thumb,
		});
	});

	return photos;
};
