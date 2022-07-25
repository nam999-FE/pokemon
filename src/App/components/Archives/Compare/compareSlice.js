const initialState = []
function ComparePokemonReducer( state = initialState, action ) {
    switch (action.type) {
        case "AppPokemon/compareItem":
            return [
                ...state,
                {
                    id : action.payload.pokemonID,
                    name : action.payload.pokemonName,
                    type : action.payload.pokemonType,
                    url : action.payload.pokemonUrl,
                    hp : action.payload.pokemonHP,
                    attack : action.payload.pokemonAttack,
                    defence : action.payload.pokemonDefense,
                    speed: action.payload.pokemonSpeed
                }
            ]
        case "AppPokemon/removeItemCompare":
            return state.filter(data => data.id !== action.payload )
        default:
            return state;
    }
}
export default ComparePokemonReducer;