import { getCharacters } from "./Modules/rest.js";
import { createCard } from "./Modules/card.js";
const containerCardsDom = document.querySelector('#cards-container');

const renderCharactes = ( async() => {
  const response = await getCharacters();
  const characters = await response['results'];
  for (const key in characters) {
    let { image, name, origin, id} = characters[key];
    containerCardsDom.appendChild(
      createCard(image, name, origin.name, id)
    );
  }
});
renderCharactes();