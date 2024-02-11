import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonFilteredTable from './components/PokemonFilteredTable';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
        setPokemon(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getPokemon();
  }, []); // Corrected the dependency array to be an empty array

  return (
    <>
      {/* Corrected to pass the entire pokemon array to the PokemonFilteredTable */}
      <PokemonFilteredTable pokemon={pokemon} />
    </>
  );
}

export default App;

