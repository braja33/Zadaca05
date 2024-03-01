import { getData, getSingleData } from "../data/repo/Photo";

export const getPhotos = async () => {
	const photos = [];

	const result = await getData();
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

	console.log("Odgovor iz servisa", photos);

	return photos;
};

export const getPhotoById = async (id) => {
	const result = await getSingleData(id);
	return result;
};
