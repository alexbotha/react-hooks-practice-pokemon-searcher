import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ updatingPokemonList }) {
  const [newPoke, setNewPoke] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    },
  });

  function handleChange(e) {
    setNewPoke({
      ...newPoke,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    const newPokemon = {
      name: newPoke.name,
      hp: newPoke.hp,
      sprites: {
        front: newPoke.front,
        back: newPoke.back,
      },
    };
    e.preventDefault();

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      .then((newPokeDetails) => updatingPokemonList(newPokeDetails));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            onChange={handleChange}
            placeholder="Name"
            name="name"
            value={newPoke.name}
          />
          <Form.Input
            fluid
            label="hp"
            onChange={handleChange}
            placeholder="hp"
            name="hp"
            value={newPoke.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            onChange={handleChange}
            placeholder="url"
            name="front"
            value={newPoke.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            onChange={handleChange}
            placeholder="url"
            name="back"
            value={newPoke.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
