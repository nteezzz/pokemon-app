import axios from "axios";

export const generateImageURL = (id) => {
    const urlID = id > 9 ? `0${id}` : `00${id}`;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${urlID}.png`;
  };
 