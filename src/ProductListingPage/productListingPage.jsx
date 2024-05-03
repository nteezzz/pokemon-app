import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './productListingPage.css'
import { generateImageURL } from '../utils/imageURL';
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
import { LogComponent } from '../components/logComponent';

export const ProductListingPage = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [pokemonList, setPokemonList]= useState([]);
  useEffect(() => {
    // const fetchPokemonList = async () => {
    //   try {
    //     const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //     setPokemonList(response.data.results);
    //   } catch (error) {
    //     console.error('Error fetching Pokémon list:', error);
    //   }
    // };
    //fetchPokemonList();
    const getPokemonData = () => {
      axios
          .get("https://pokeapi.co/api/v2/pokemon")
          .then(response=>setPokemonList(response.data.results))
          .catch(error => console.log(error));
  };
  getPokemonData();
  }, []);

  
  return (
    <div>
      
      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <div className='header-row'><h1>Pokémon App</h1><input type="checkbox" className="toggle-button" onClick={toggleTheme}/><div className='login-container'><LogComponent/></div></div>
      
      <ul className='row'>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <div className='col'>
            <div className="card" id='grey-area'>
                <img className="card-img-top" src={generateImageURL(index+1)} alt="pokemon-image"/>
                <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <Link to={`/pokemons/${index + 1}`}>more details</Link>
            </div>
            </div>
            </div>
          </li>
        ))}
        <li>

        </li>
      </ul>
    </div>
      
    </div>
  );
};
