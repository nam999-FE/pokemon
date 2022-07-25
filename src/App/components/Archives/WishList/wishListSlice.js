const initialState = [];
const pokemonPhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AppPokemon/addWishList":
      return [
          ...state,
          {
            id: action.payload.pokemonID,
            name: action.payload.pokemonName,
            type: action.payload.pokemonType,
            url: action.payload.pokemonUrl,
          },
        ]
    case "AppPokemon/removeItem":
      return state.filter(data => data.id !== action.payload )
    default:
      return state;
  }
};
export default pokemonPhotoReducer;

// return [
//   ...state,
//   {
//     id: action.payload.pokemonID,
//     name: action.payload.pokemonName,
//     type: action.payload.pokemonType,
//     url: action.payload.pokemonUrl,
//   },
// ]
