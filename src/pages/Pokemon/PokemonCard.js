import React, { Component } from "react";
import PropTypes from "prop-types";
import PokemonService from "../../services/PokemonService";
import TypesBadges from "./TypesBadges";

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {}, error: null };
  }

  async componentDidMount() {
    try {
      const response = await PokemonService.getPokemon(this.props.url);
      const data = response.data;
      this.setState({ pokemon: data });
    } catch (error) {
      this.setState({ error: error });
    }
  }

  render() {
    const { name } = this.props;
    const { id, types } = this.state.pokemon;

    return (
      <div className="card has-background-danger pokemon-card has-text-centered">
        {id ? (
          <div className="card-content">
            <h4 className="is-size-4">
              #{id} - <span className="is-capitalized">{name}</span>
            </h4>
            <div className="card-image">
              <img
                src={this.state.pokemon.sprites.front_default}
                alt="sprite"
              />
            </div>
            <div className="content">
              <TypesBadges types={types} />
            </div>
          </div>
        ) : (
          "Consultando pokédex..."
        )}
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default PokemonCard;
