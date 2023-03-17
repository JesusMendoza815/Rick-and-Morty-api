import { createCardDetail } from "./Modules/cardDetails.js";
import { getCharacterById } from "./Modules/rest.js";

const cardContainer = document.querySelector('#card-container');
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

const printCard = ( async() => {
  const response = await getCharacterById(id);
  let { image , name, status, species, location, origin } = response;
  cardContainer.appendChild(
    createCardDetail( image ,name, status, species, location.name, origin.name)
  );
});
printCard();