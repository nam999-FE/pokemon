import { combineReducers } from "redux"
import pokemonPhotoReducer from "../App/components/Archives/WishList/wishListSlice"
import ComparePokemonReducer from "../App/components/Archives/Compare/compareSlice"
import filterPokemonReducer from "../App/components/Filter/filterSlice"
import searchPokemonReducer from "../App/components/Archives/searchSlice"
const rootReducer = combineReducers({
   wishList: pokemonPhotoReducer,
   compare: ComparePokemonReducer,
   filter: filterPokemonReducer,
   search: searchPokemonReducer
})
export default rootReducer