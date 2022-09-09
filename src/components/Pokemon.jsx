import React from "react";
import { NavLink } from "react-router-dom";
import fire from "../images/bgPokemons/fire.jpg";
import bug from "../images/bgPokemons/bug.gif";
import dark from "../images/bgPokemons/dark.gif";
import dragon from "../images/bgPokemons/dragon.jpg";
import electric from "../images/bgPokemons/electric.jpg";
import rock from "../images/bgPokemons/rock.jpg";
import grass from "../images/bgPokemons/grass.gif";
import ghost from "../images/bgPokemons/ghost.jpg";
import fairy from "../images/bgPokemons/fairy.gif";
import fighting from "../images/bgPokemons/fighting.jpg";
import flying from "../images/bgPokemons/flying.jpg";
import ground from "../images/bgPokemons/ground.jpg";
import ice from "../images/bgPokemons/ice.gif";
import normal from "../images/bgPokemons/normal.jpg";
import poison from "../images/bgPokemons/poison.gif";
import psychic from "../images/bgPokemons/psychic.jpg";
import steel from "../images/bgPokemons/steel.gif";
import water from "../images/bgPokemons/water.jpg";


export default function Pokemon({ pokemon, emoticons }) {
  let bgPokemon
  if(pokemon.types[0].type.name === "fire"){
     bgPokemon = fire;
  }
  else if(pokemon.types[0].type.name === "bug"){
      bgPokemon = bug;
  }
  else if(pokemon.types[0].type.name === "dark"){
      bgPokemon = dark;
  }
  else if(pokemon.types[0].type.name === "dragon"){
      bgPokemon = dragon;
  }
  else if(pokemon.types[0].type.name === "electric"){
      bgPokemon = electric;
  }
  else if(pokemon.types[0].type.name === "rock"){
      bgPokemon = rock;
  }
  else if(pokemon.types[0].type.name === "grass"){
      bgPokemon = grass;
  }
  else if(pokemon.types[0].type.name === "ghost"){
      bgPokemon = ghost;
  }
  else if(pokemon.types[0].type.name === "fairy"){
      bgPokemon = fairy;
  }
  else if(pokemon.types[0].type.name === "fighting"){
      bgPokemon = fighting;
  }
  else if(pokemon.types[0].type.name === "flying"){
      bgPokemon = flying;
  }
  else if(pokemon.types[0].type.name === "ground"){
      bgPokemon = ground;
  }
  else if(pokemon.types[0].type.name === "ice"){
      bgPokemon = ice;
  }
  else if(pokemon.types[0].type.name === "normal"){
      bgPokemon = normal;
  }
  else if(pokemon.types[0].type.name === "poison"){
      bgPokemon = poison;
  }
  else if(pokemon.types[0].type.name === "psychic"){

      bgPokemon = psychic;
  }
  else if(pokemon.types[0].type.name === "steel"){
      bgPokemon = steel;
  }
  else if(pokemon.types[0].type.name === "water"){
      bgPokemon = water;
  }
  try {
    return (
      <div className="col mb-4 " >
        <NavLink to={pokemon.name} className="text-decoration-none text-dark">
          <div
            className="card"
            style={{ minWidth: "300px", boxShadow: "0 0 10px black" }}
          >
            <img
              src={pokemon.sprites.front_default}
              alt="dibujo pokemon"
              className="card-img-top"
              style={{backgroundImage: `url(${bgPokemon})`}}
            />
            <div className="card-body" id={pokemon.types[0].type.name}>
              <h4 className="text-capitalize">
                {pokemon.name} -{" "}
                {pokemon.types.map((infoType) => {
                  const selector = infoType.type.name;
                  return emoticons[selector];
                })}
              </h4>



            </div>
          </div>
        </NavLink>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
