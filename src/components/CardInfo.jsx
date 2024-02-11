import '../App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardInfo(props) {
    
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemonInfo() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
                setPokemon(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getPokemonInfo();
    }, []);

    return (
        <>
            {/* Display pokemon information */}
            <p>{pokemon.name}</p>
            {/* Add more information as needed */}
        </>
    );
}