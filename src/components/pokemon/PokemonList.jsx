import { Component } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import GetPokemon from "../GetPokemon/GetPokemon";
class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: [],
    searchTerm: "",
    currentPage: 1, // tracks current page for pagination
    totalPages: 0, // total number of pages
    loading: false,
  };

  async componentDidMount() {
    this.performSearch();
  }

  // async fetchPokemon() {
  //   try {
  //     const res = await axios.get(this.state.url);
  //     const { results, count } = res.data;
  //     const totalPages = Math.ceil(count / 20); // assuming 20 items per page
  //     this.setState({ pokemon: results, totalPages: totalPages });
  //   } catch (error) {
  //     console.error("Error fetching Pokémon data:", error);
  //   }
  // }

  async performSearch(currentPage = 1) {
    this.setState({ loading: true });
    const res = await GetPokemon(
      this.state.url,
      this.state.searchTerm,
      currentPage
    );
    const { results, count } = res.data;
    const totalPages = Math.ceil(count / 20); // assuming 20 items per page
    this.setState({
      pokemon: results,
      totalPages: totalPages,
      currentPage,
      loading: false,
    });
  }
  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.performSearch(); // Re-fetch data when search term changes
    });
  };

  handleNextPage = async () => {
    const { currentPage, totalPages } = this.state;
    if (currentPage < totalPages) {
      await this.performSearch(currentPage + 1);
    }
  };

  handlePrevPage = async () => {
    const { currentPage, totalPages } = this.state;
    if (currentPage < totalPages) {
      await this.performSearch(currentPage - 1);
      // this.setState({ currentPage: currentPage - 1 });
    }
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
            <div className="pagination-controls">
              <button
                onClick={this.handlePrevPage}
                disabled={this.state.currentPage === 1}
              >
                Prev
              </button>
              <button
                onClick={this.handleNextPage}
                disabled={this.state.currentPage === this.state.totalPages}
              >
                Next
              </button>
            </div>
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
