import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { generateImageURL } from '../utils/imageURL';
import './productDescriptionpage.css';
import { PokemonType } from '../components/pokemonType';

export const ProductDescriptionPage = () => {

const { id } = useParams();
const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
const [pokemon, setPokemon] = useState();

useEffect(() => {

const fetchPokemonData= async () => {
try {
const response = await axios.get(URL);
setPokemon(response.data);
} catch (error) {
console.error('Error fetching Pokémon list:', error);
}
};

fetchPokemonData();
});

const pokemonDetails = pokemon;

return (
<>

  {pokemonDetails&&
  <div class="container">
    <div className="card ">
      <div className="row">
          <div className="col">
              <img src={generateImageURL(id)} className="card-img" alt="Pokemon Image"/>
          </div>
          <div className="col">
              <div className="card-body">
                <div className="card-title"><h5>{pokemonDetails.name}</h5></div>
                <div className="card-text">ID:{ id > 9 ? `0${id}` : `00${id}`}</div>
                <div className="card-text">Height: {pokemonDetails.height}ft</div>
                <div className="card-text">Weight: {pokemonDetails.weight}lbs</div>
                <div className="card-text">Type:
                <ul>
                  {pokemonDetails.types.map((type, index)=>(
                    <li key={index}>{type.type.name}</li>
                  ))}
                </ul>
                </div>
                <div className="card-text">Abilities:
                <ul>
                  {pokemonDetails.abilities.map((ability, index)=>(
                    <li key={index}>{ability.ability.name}</li>
                  ))}
                </ul>
                </div>
              </div>
          </div>
      </div>
  </div>

</div>
}
  
</>

);
};