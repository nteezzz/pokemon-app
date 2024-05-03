import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { generateImageURL } from '../utils/imageURL';
import './productDescriptionpage.css';
import { PopulateType } from '../components/populateType.jsx';
import { ThemeContext } from '../context/themeContext';
import { PokemonStats } from '../components/pokemonStats.jsx';
import { LogComponent } from '../components/logComponent.jsx';

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
<div className='main-container'>
<div className={`login-container ${theme==='light' ? 'light-theme' : 'dark-theme' }`} id='pdp-login'><LogComponent/></div>
<div className={`pdp-container ${theme==='light' ? 'light-theme' : 'dark-theme' }`}>
    <input type="checkbox" className="toggle-button" onClick={toggleTheme} />
    <div className='pokemon-card'id='grey-area'>
      <div className='row'>
        <div className='pokemon-header'><h2>{pokemonDetails.name}#{ id.toString().padStart(3, '0')}</h2></div>
      </div>
      <div className='row'>
        <div className='pokemon-content'>
        <div className='col'>
        <img className="pokemon-img" src={generateImageURL(id)} alt={pokemonDetails.name} />
        </div>
        <div className='col'>
          <div className='pokemon-body'>
          <div className='pokemon-text'><h5>Height: {pokemonDetails.height}ft</h5></div>
            <div className='pokemon-text'><h5>Weight: {pokemonDetails.weight}lbs</h5></div>
            <div className="pokemon-abilities">
              <h5>Abilities:</h5>
              <ul>
                {pokemonDetails.abilities.map((ability, index)=>(
                <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="pokemon-type">
              <h5>Type:</h5>
              <ul>
                {pokemonDetails.types.map((type, index)=>(
                <li key={index}>
                  <PopulateType pokemonType={type.type.name} />
                </li>
                ))}
              </ul>
            </div>
            <PokemonStats stats={pokemonDetails.stats}/>
          </div>
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