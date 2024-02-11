import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokemon, setPokemon] = useState([])
 useEffect(() => {
  async function getPokemon() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
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
          <PokemonCard key={poke.name} pokemon={poke} />
        )
      })
    }
    </>
  )
}

export default App


