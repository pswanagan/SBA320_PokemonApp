export default function SearchBar ({searchText, onPokemonTypeChange,onSearchTextChange}){
    return(
        <form action="">
            <input type="text" value={searchText}placeholder="Search..." onChange={(e) => onSearchTextChange(e.target.value)}/>
            <br />
            <label htmlFor="pokemonTypes">Search by Pokemon Type:</label>
               <select name="pokemonTypes"  onChange={(e) => onPokemonTypeChange(e.target.value)}>
                <option value=""></option>
                <option value="normal">Normal</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="ghost">Ghost</option>
                <option value="steel">Steel</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="fairy">Fairy</option>
               </select>
           
           
            
           
          
           
            

        </form>
    )
}