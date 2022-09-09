import React from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Pokemons from "../components/Pokemons";

export default function HomePage({
  prevPage,
  nextPage,
  pagination,
  loading,
  pokemons,
}) {
  try {
    return (
      <>
        <Navbar />
        <div className="container">
          <Pagination
            prevPage={prevPage}
            nextPage={nextPage}
            prev={pagination.previous}
            next={pagination.next}
            loading={loading}
          />
          <Pokemons pokemons={pokemons} />
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
