import React from "react";
import { useParams } from "react-router-dom";

export default function AboutPage2({ fetchPokemon, loading }) {
  let { pokemon } = useParams();

  try {
    if (loading) {
      return (
        <div className="container mt-5  text-center">
          {" "}
          <div className="spinner-border "></div>
        </div>
      );
    } else {
      const pokedata = fetchPokemon(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      return (
        <div className="pokemonDetails" key={pokedata.name}>
          <div className="info">
            <div className=" info-center">
              <h1 className="text-capitalize">{pokedata.name.toUpperCase()}</h1>
              <img
                src={pokedata.sprites.front_default}
                alt="Pokemon"
                className="pokemon-img"
              />
              <div className="types">
                {pokedata.types.map((infoType) => {
                  return <p id={infoType.type.name}>{infoType.type.name}</p>;
                })}
              </div>
            </div>

            <div className="info-side">
              {" "}
              <div className="data">
                <div className="data-left">
                  {" "}
                  {pokedata.stats.map((infoStat) => {
                    return (
                      <>
                        <p key={infoStat}>
                          <b>{infoStat.stat.name.toUpperCase()}</b>:{" "}
                          {infoStat.base_stat}
                        </p>
                      </>
                    );
                  })}
                </div>
                <div className="data-right">
                  <p>
                    <b>HEIGHT: </b>
                    {pokedata.height}
                  </p>
                  <p>
                    <b>WEIGHT: </b>
                    {pokedata.weight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } catch (error) {}
}
