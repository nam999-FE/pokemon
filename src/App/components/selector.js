import { createSelector } from "reselect"

const wishListSelector = (state) => state.wishList;
const compareSelector = (state) => state.compare;
const filterSelector = (state) => state.filter;
const searchSelector = (state) => state.search

const pokemonSelector = createSelector(
    wishListSelector,
    (wishList) => {
        return wishList;
    }
)

const filterPokemonSelector = createSelector(
    filterSelector,
    (filter) => {
        return filter;
    }
)

const comparePokemonSelector = createSelector(
    compareSelector,
    (compare) => {
        return compare;
    }
)

const searchPokemon = createSelector(
    searchSelector,
    (search) => {
        return search;
    }
)


export { pokemonSelector, comparePokemonSelector, filterPokemonSelector,searchPokemon };