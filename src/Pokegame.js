import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 75 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 64 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 44 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 78 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 88 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 72 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 77 },
      { id: 133, name: "Eeveee", type: "normal", base_experience: 51 }
    ]
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemons];
    while (hand1.length < hand2.length) {
      let randomIndex = Math.floor(Math.random() * hand2.length);
      let randomPokemon = hand2.splice(randomIndex, 1)[0];
      hand1.push(randomPokemon);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokemons={hand1} exp={exp1} winner={exp1 > exp2} />
        <Pokedex pokemons={hand2} exp={exp2} winner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
