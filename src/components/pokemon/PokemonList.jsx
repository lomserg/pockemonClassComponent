import { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: [],
    searchTerm: "",
    currentPage: 0, // tracks current page for pagination
    totalPages: 0, // total number of pages
  };

  async componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    try {
      const res = await axios.get(this.state.url);
      const { results, count } = res.data;
      const totalPages = Math.ceil(count / 20); // assuming 20 items per page
      this.setState({ pokemon: results, totalPages: totalPages });
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  }
  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    const { pokemon, searchTerm } = this.state;
    // Filter pokemon based on search term
    const filteredPokemon = pokemon.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredPokemon, searchTerm);
    return (
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
        </div>
        {pokemon.length > 0 ? (
          <div className="row">
            {filteredPokemon.length > 0 ? (
              filteredPokemon.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))
            ) : (
              <h1>No Pokémon found</h1>
            )}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        {/* {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )} */}
      </div>
    );
  }
}

export default PokemonList;
