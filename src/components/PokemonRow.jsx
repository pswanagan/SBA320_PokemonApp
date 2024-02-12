export default function PokemonRow ({ pokemon }){

    function formatWeight(weight) {
        // Convert weight to string to manipulate it
        let weightStr = weight.toString();
      
        // Check if weight has only one digit
        if (weightStr.length === 1) {
          return "0." + weightStr;
        } else {
          // Insert a period before the last digit for weights with more than one digit
          return weightStr.slice(0, -1) + "." + weightStr.slice(-1);
        }
      }
      function formatHeight(height) {
        // Convert weight to string to manipulate it
        let heightStr = height.toString();
      
        // Check if weight has only one digit
        if (heightStr.length === 1) {
          return "0." + heightStr;
        } else {
          // Insert a period before the last digit for weights with more than one digit
          return heightStr.slice(0, -1) + "." + heightStr.slice(-1);
        }
      }
      function capitalizeFirstLetter(name) {
        if (!name) return name; // Return the original name if it's falsy (e.g., empty, null, undefined)
        
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
      

    const pokemonHeight = formatHeight(pokemon.height);
    const pokemonWeight = formatWeight(pokemon.weight);
    const pokemonName = capitalizeFirstLetter(pokemon.name);
    let pokemonItem = '';
    if (pokemon.sprites.front_default == null){
    return;
}
const abilities = pokemon.abilities.map(item => item.ability.name + ' ');
const held = pokemon.held_items.map(item =>  item.item.name + ' '); 
if (pokemon.held_items.length > 0){
    pokemonItem = held;
}else{
    pokemonItem = 'None';
}




       return(
       <tr>
            <td><img src={pokemon.sprites.front_default} alt={pokemon.name} /></td>
            <td><audio controls> 
            <source src={pokemon.cries.latest} type="audio/ogg" />
            </audio></td>
           <td>{pokemonName}</td>
            <td>{pokemon.base_experience ? pokemon.base_experience + ' xp': 'Not Available'}</td>
            <td>{abilities}</td>
            <td>{pokemonItem}</td>
            <td>{pokemonHeight} m</td>
            <td>{pokemonWeight} kg</td>
            
       </tr>
     )
   }