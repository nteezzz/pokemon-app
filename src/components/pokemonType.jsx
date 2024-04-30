import React from "react";

export const PokemonType=({pokemonType})=>{

    const setContainerColor=({type})=>{

        switch(type){
            case "grass":
                return "background-color: green";
            case "fire":
                return "background-color:orange";
            case "water":
                return "background-color:blue";
            case "poison":
                return "background-color:purple";
            case "bug":
                return "background-color:bug";
            default:
                return "background-color:white";
        }

    }

    return(
        <div style={setContainerColor(pokemonType)}>{pokemonType}</div>
    );
}