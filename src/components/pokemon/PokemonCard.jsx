import { Component } from "react";
import { Link } from "react-router-dom";

class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex,
    });
  }
  render() {
    const { name, imageUrl, pokemonIndex } = this.state;
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Link to={`/pokemon/${pokemonIndex}`}>
          <div className="card">
            <div className="card-header">
              <h3>{pokemonIndex}</h3>
            </div>
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <img src={imageUrl} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PokemonCard;
