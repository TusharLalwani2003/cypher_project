export const GETUtil = (url) =>
	fetch(url)
		.then((response) => response.json())
		.catch((e) => {
			return { status: 404, data: e.toString() };
		});

export const POSTUtil = (url, data) => {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	};
	fetch(url, requestOptions)
		.then((response) => response.json())
		.catch((e) => {
			return { status: 404, data: e.toString() };
		});
};
