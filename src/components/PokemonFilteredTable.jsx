import {useState} from 'react';
import '../App.css'
import PokemonTable from './PokemonTable';
import SearchBar from './SearchBar';
export default function PokemonFilteredTable(props ) {
    const [searchText, setSearchText] = useState('');
  const [pokemonType, setPokemonType] = useState('');
  const [gameName, setGameName] = useState('');
    return(
        <div>
            <h1><img src="/pokemon-pokeball.gif" alt="pokeball" /> <strong>Table of Pokemon</strong> <img src="/pokemon-pokeball.gif" alt="pokeball" /></h1>
            <br />
            <br />
        <SearchBar searchText={searchText} onSearchTextChange={setSearchText} onPokemonTypeChange={setPokemonType} onGameNameChange={setGameName}/>
        <PokemonTable pokemon={props.pokemon} searchText={searchText}  pokemonType={pokemonType} gameName={gameName} />
    </div>
    )
};