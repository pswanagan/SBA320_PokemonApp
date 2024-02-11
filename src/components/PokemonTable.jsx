import '../App.css'


export default function PokemonTable({ pokemon, searchText, pokemonType }) {
    const rows = [];
    pokemon.forEach(poke => {
        if (poke.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
            return;
          }
          
    
        poke.types.forEach(t => {
            if (t != pokemonType){
                return;
            }
        })
    
    
        rows.push(
          <ProductRow 
            key={poke.name} 
            pokemon={poke} 
          />
        )
      
      })

    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}