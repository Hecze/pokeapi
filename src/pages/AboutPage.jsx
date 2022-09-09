import React from "react";

export default function AboutPage({ pokedata}) {

  try {
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
                return (
                  <p key={infoType.type.name} id={infoType.type.name}>{infoType.type.name}</p>
                );
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
                        <b>{infoStat.stat.name.toUpperCase()}</b>: {infoStat.base_stat}
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
  } catch (error) {
    console.log(error);
  }
}
