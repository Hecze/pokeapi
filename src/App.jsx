import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AboutPage2 from "./pages/AboutPage2";

function App() {
  //fetching data from the API https://pokeapi.co/api/v2/pokemon

  const [pokemons, setPokemons] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const prevPage = () => {
    if (pagination.previous !== null && !loading) {
      setLoading(true);
      fetchPokemons(pagination.previous);
    } else {
      return null;
    }
  };

  const nextPage = () => {
    if (pagination.prev !== null && !loading) {
      setLoading(true);
      fetchPokemons(pagination.next);
    } else {
      return null;
    }
  };

  const fetchPokemons = async (initialUrl) => {
    const response = await fetch(initialUrl);
    const data = await response.json();
    setPokemons([]);
    setPagination(data);
    for (const pokemon of data.results) {
      const data = await fetchPokemon(pokemon.url);
      setPokemons((prevPokemons) => [...prevPokemons, data]);
    }
    setLoading(false);
  };

  const fetchPokemon = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllPokemons((prevPokemons) => [...prevPokemons, data]);
      setLoading(false);
      return data;
    } catch (error) {
      window.location.href = "/";
      alert("Pokemon not found");
    }
  };

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            prevPage={prevPage}
            nextPage={nextPage}
            pagination={pagination}
            loading={loading}
            pokemons={pokemons}
          />
        }
      />
      <Route
        path="/:pokemon"
        element={<AboutPage2 fetchPokemon={fetchPokemon} loading={loading} />}
      />
      {allPokemons.map((pokemon) => (
        <Route
          key={pokemon.id}
          path={`/${pokemon.name}`}
          element={<AboutPage key={pokemon.id} pokedata={pokemon} />}
        />
      ))}
    </Routes>
  );
}

export default App;
