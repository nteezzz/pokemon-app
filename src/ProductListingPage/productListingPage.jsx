import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './productListingPage.css'
import { generateImageURL } from '../assets/imageURL';

export const ProductListingPage = () => {

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
      <h1>Pokémon App</h1>
      <ul className='row'>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <div className='col'>
            <div className="card">
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
  );
};
