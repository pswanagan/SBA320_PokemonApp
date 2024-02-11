import '../App.css'
import CardInfo from './CardInfo'
export default function PokemonCard(props ) {
    return(
        <div className='card'>
        <h1>{props.pokemon.name}</h1>
        <CardInfo name={props.pokemon.name} />
        </div>
    )
};