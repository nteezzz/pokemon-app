import axios from "axios";

export const generateImageURL = (id) => {
    const idURL= id.toString().padStart(3, '0');
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idURL}.png`;
  };
 