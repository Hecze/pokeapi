import React from "react";
import Pokemon from "./Pokemon";

export default function Pokemons({ pokemons }) {
  const emoticons = {
    steel: "โ๏ธ",
    water: "๐",
    bug: "๐",
    dragon: "๐ฒ",
    electric: "โก",
    ghost: "๐ป",
    fire: "๐ฅ",
    fairy: "๐ง",
    ice: "๐ง",
    fighting: "๐ฅ",
    normal: "๐",
    grass: "๐ฟ",
    psychic: "๐ฎ",
    rock: "๐ฟ",
    dark: "โ ๏ธ",
    ground: "๐ฆฆ",
    poison: "๐งช",
    flying: "๐ฆ",
  };
  return (
    <div className="row gap-2" style={{ marginTop: "2%" }}>
      {pokemons.map((item) => (
        <Pokemon pokemon={item} key={item.id} emoticons={emoticons} />
      ))}
    </div>
  );
}
