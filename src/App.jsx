import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonFilteredTable from './components/PokemonFilteredTable';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
        setPokemon(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); 
      }
    }
    getPokemon();
  }, []); 

  if (isLoading) { 
    return <div>Loading...</div>;
  }

  return (
    <>
      <PokemonFilteredTable pokemon={pokemon} />
    </>
  );
}

export default App;
