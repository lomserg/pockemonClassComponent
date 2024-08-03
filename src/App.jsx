import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import PokemonWithParams from "./components/pokemon/Pokemon";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="conainer">
            <Routes>
              <Route exact path="/" Component={Dashboard} />
              <Route
                path="/pokemon/:pokemonIndex"
                element={<PokemonWithParams />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
