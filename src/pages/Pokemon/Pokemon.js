import React, { Component } from 'react';
import TypesBadges from '../../components/TypesBadges';
import Sprite from '../../components/Sprite';
import PokemonAbilities from '../../components/PokemonPage/PokemonAbilities';

class Pokemon extends Component {
  state = {
    pokemon: {}
  }

  render() {
    console.log(this.props.location.state.pokemon);
    const { name } = this.props.match.params;
    const { pokemon } = this.props.location.state;
    return (
      <div className="card has-background-danger columns is-centered is-multiline">
        <header className="card-header has-text-centered column is-full">
          <h3 className="title is-capitalized has-text-light">{name}</h3>
          <div className="card-image">
            <Sprite
              sprite={pokemon.sprites.front_default}
              name={name}
            />
            <Sprite
              sprite={pokemon.sprites.back_default}
              name={name}
            />
          </div>
          <TypesBadges types={pokemon.types} />
        </header>
        <div className="content column is-full">
          <div className="columns is-multiline">
            <div className="column">
              <PokemonAbilities abilities={pokemon.abilities} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;