import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";

import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchPoke, setSearchPoke] = useState("");

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setPokemon);
  }, []);

  function searchInputFunction(e) {
    setSearchPoke(e);
  }

  const filteredPoke = pokemon.filter((poke) =>
    poke.name.toLowerCase().startsWith(searchPoke.toLowerCase())
  );

  function updatingPokemonList(newPokeDetails) {
    setPokemon([...pokemon, newPokeDetails]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm updatingPokemonList={updatingPokemonList} />
      <br />
      <Search searchInputFunction={searchInputFunction} />
      <br />
      <PokemonCollection filteredPoke={filteredPoke} />
    </Container>
  );
}

export default PokemonPage;
