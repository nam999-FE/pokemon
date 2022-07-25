const searchPokemonReducer = ( state = "Search Pokemon", action ) => {
    switch(action.type){
        case "AppPokemon/SearchPokemon":
            return action.payload
        default:
            return state;
    }
}
export default searchPokemonReducer