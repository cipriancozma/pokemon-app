import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.winner) {
      title = <h1 className="Pokedex-winner">Winner</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Loser</h1>;
    }
    return (
      <div className="Pokedex">
        <h1>Pokemon's fight!</h1>
        <p>Total experience: {this.props.exp}</p>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemons.map(pokemon => (
            <Pokecard
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              base_experience={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
