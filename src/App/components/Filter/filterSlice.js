const filterPokemonReducer = (state = [], action) => {
    switch(action.type) {
        case "AppPokemon/FilterType":
            return action.payload;
        default:
            return state;
    }
}
export default filterPokemonReducer