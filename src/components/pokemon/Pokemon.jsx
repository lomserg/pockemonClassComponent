import { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
class Pokemon extends Component {
  constructor(props) {
    super(props);
  }
  state = { name: "", pokemonIndex: "", imageUrl: "" };
  async componentDidMount() {
    const { pokemonIndex } = this.props.params;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;
    const pokemonRes = await axios.get(pokemonUrl);
    const name = pokemonRes.data.name;
    this.setState({ name });
    console.log(pokemonUrl);
  }
  render() {
    console.log(this.state);
    return <h1>{this.state.name}</h1>;
  }
}
function PokemonWithParams() {
  const params = useParams();
  return <Pokemon params={params} />;
}

export default PokemonWithParams;
