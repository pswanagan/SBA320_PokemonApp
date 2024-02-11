export default function PokemonRow ({ pokemon }){
if (pokemon.sprites.front_default == null){
    return;
}
    
       return(
       <tr>
            <td><img src={pokemon.sprites.front_default} alt={pokemon.name} /></td>
           <td>{pokemon.name}</td>
            <td>{pokemon.base_experience}</td>
            <td>{pokemon.height}</td>
            <td>{pokemon.weight}</td>
            
       </tr>
     )
   }