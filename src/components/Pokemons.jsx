import React from "react";
import Pokemon from "./Pokemon";

export default function Pokemons({ pokemons }) {
  const emoticons = {
    steel: "⚔️",
    water: "🌊",
    bug: "🐛",
    dragon: "🐲",
    electric: "⚡",
    ghost: "👻",
    fire: "🔥",
    fairy: "🧚",
    ice: "🧊",
    fighting: "🥊",
    normal: "😐",
    grass: "🌿",
    psychic: "🔮",
    rock: "🗿",
    dark: "☠️",
    ground: "🦦",
    poison: "🧪",
    flying: "🦅",
  };
  return (
    <div className="row gap-2" style={{ marginTop: "2%" }}>
      {pokemons.map((item) => (
        <Pokemon pokemon={item} key={item.id} emoticons={emoticons} />
      ))}
    </div>
  );
}
