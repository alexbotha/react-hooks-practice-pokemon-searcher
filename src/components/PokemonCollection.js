import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ filteredPoke }) {
  return (
    <Card.Group itemsPerRow={6}>
      {filteredPoke.map((filteredP) => (
        <PokemonCard filteredP={filteredP} />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
