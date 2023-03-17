const URL = 'https://rickandmortyapi.com/api/character';

const getCharacters = (async () => {
  const response = await fetch(URL);
  const data = response.json();
  return data;
});

const getCharacterById = (async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const data = response.json();
  return data;
});

export { getCharacters, getCharacterById };