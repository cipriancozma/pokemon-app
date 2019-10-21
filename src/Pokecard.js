import React, { Component } from "react";
import "./Pokecard.css";

// const POKEMON_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKEMON_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let numberThree = num => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKEMON_API}${numberThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-name">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">
          Base Experience: {this.props.base_experience}
        </div>
      </div>
    );
  }
}

export default Pokecard;
