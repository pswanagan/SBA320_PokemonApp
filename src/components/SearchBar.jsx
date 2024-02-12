export default function SearchBar ({searchText, onPokemonTypeChange,onSearchTextChange, onGameNameChange}){
    return(
        <form action="">
            <input type="text" value={searchText}placeholder="Search..." onChange={(e) => onSearchTextChange(e.target.value)}/>
            <br />
            <label htmlFor="pokemonTypes">Search by Pokemon Type:</label>
               <select name="pokemonTypes"  onChange={(e) => onPokemonTypeChange(e.target.value)}>
                <option value=""></option>
                <option value="normal">Normal</option>
                <option value="flying">Flying</option>
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
               <label htmlFor="gameNames">Search by Game:</label>
               <select name="gameNames"  onChange={(e) => onGameNameChange(e.target.value)}>
                <option value=""></option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="crystal">Crystal</option>
                <option value="ruby">Ruby</option>
                <option value="sapphire">Sapphire</option>
                <option value="emerald">Emerald</option>
                <option value="firered">Fire</option>
                <option value="leafgreen">Leaf Green</option>
                <option value="diamond">Diamond</option>
                <option value="pearl">Pearl</option>
                <option value="platinum">Platinum</option>
                <option value="heartgold">Heart Gold</option>
                <option value="soulsilver">Soul Silver</option>
                <option value="black">Black</option>
                <option value="white">White</option>
               </select>
           
            
           
          
           
            

        </form>
    )
}