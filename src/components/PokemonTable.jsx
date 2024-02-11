import '../App.css';
import PokemonRow from './PokemonRow';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonTable({ pokemon, searchText, pokemonType }) {
    const [detailedPokemon, setDetailedPokemon] = useState([]);

    useEffect(() => {
        async function fetchPokemonDetails() {
            try {
                const fetchPromises = pokemon.map(poke => 
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
                );
                const responses = await Promise.all(fetchPromises);
                const pokemonDetails = responses.map(response => response.data);
                setDetailedPokemon(pokemonDetails);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPokemonDetails();
    }, [pokemon]); // Depend on the pokemon prop so it only runs when pokemon prop changes

    // Filter detailedPokemon based on searchText and pokemonType
    const filteredPokemon = detailedPokemon.filter(poke => {
        const nameMatch = poke.name.toLowerCase().includes(searchText.toLowerCase());
        const typeMatch = pokemonType ? poke.types.some(type => type.type.name === pokemonType) : true;
       
        return nameMatch && typeMatch ;
    });

    const rows = filteredPokemon.map(poke => (
        <PokemonRow
            key={poke.name}
            pokemon={poke}
        />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Base Experience</th>
                    <th>Height</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
