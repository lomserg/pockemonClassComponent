import { Component } from "react";

class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };
  render() {
    const name = this.props.name;
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <div className="card-header">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
