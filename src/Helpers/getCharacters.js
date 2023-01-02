export const getCharacter = async () => {
	console.log("consultando a la api");
	const URL = `https://rickandmortyapi.com/api/character`;
	const resp = await fetch(URL);

	const data = await resp.json();

	const { info, results } = data;
	console.log(info, results);

	// return data;
};
