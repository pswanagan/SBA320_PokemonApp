import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import PokemonFilteredTable from './components/PokemonFilteredTable'

function App() {
  const [pokemon, setPokemon] = useState([])
 useEffect(() => {
  async function getPokemon() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      setPokemon(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  getPokemon();
 }, {})
  return (
    <>
    {
      pokemon.map(poke => {
        return (
          <PokemonFilteredTable key={poke.name} pokemon={poke} />
        )
      })
    }
    </>
  )
}

export default App


