import React, { Component } from "react";
import PokemonList from "../pokemon/PokemonList";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
