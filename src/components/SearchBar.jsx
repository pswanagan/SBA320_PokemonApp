export default function SearchBar ({searchText, pokemonType,  onPokemonTypeChange,onSearchTextChange}){
    return(
        <form action="">
            <input type="text" value={searchText}placeholder="Search..." onChange={(e) => onSearchTextChange(e.target.value)}/>
            <br />
            <label htmlFor="normal">
                <input type="checkbox" checked='normal'id='normal' onChange={(e) => onPokemonTypeChange(e.target.checked)}   />
                {" "}
               Normal
            </label>
        </form>
    )
}