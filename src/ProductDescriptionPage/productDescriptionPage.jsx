import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { generateImageURL } from '../utils/imageURL';
import './productDescriptionpage.css';
import { PopulateType } from '../components/populateType.jsx';
import { ThemeContext } from '../context/themeContext';


export const ProductDescriptionPage = () => {

const { id } = useParams();
const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
const [pokemon, setPokemon] = useState();
const {theme, toggleTheme}=useContext(ThemeContext);

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
  <div className='pdp-container' id='white-space'>
    <div className={`pdp-subcontainer ${theme==='light' ? 'light-theme' : 'dark-theme' }`}>
      <input type="checkbox" className="toggle-button" onClick={toggleTheme} />
      <div class="pokemon-card">
        <div className="pokemon-name">
          <h2>{pokemonDetails.name}#{ id.toString().padStart(3, '0')}</h2>
        </div>
        <div className='row'>
          <div className='col'>
            <img className="pokemon-image" src={generateImageURL(id)} alt={pokemonDetails.name} />
          </div>
          <div className='col' id='stats'>
            <div className='pokemon-text'>Height: {pokemonDetails.height}ft</div>
            <div className='pokemon-text'>Weight: {pokemonDetails.weight}lbs</div>
            <div className="pokemon-abilities">
              Abilities:
              <ul>
                {pokemonDetails.abilities.map((ability, index)=>(
                <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="pokemon-type">
              Type:
              <ul>
                {pokemonDetails.types.map((type, index)=>(
                <li key={index}>
                  <PopulateType pokemonType={type.type.name} />
                </li>
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