const wishList = (data) => {
    return {
        type: "AppPokemon/addWishList",
        payload: data
    }
}
const RemoveitemWishList = (id) => {
    return {
        type: "AppPokemon/removeItem",
        payload: id
    }
}
const CompareList = (data) => {
    return {
        type: "AppPokemon/compareItem",
        payload: data
    }
}
const RemoveItemCompareList = (id) => {
    return {
        type: "AppPokemon/removeItemCompare",
        payload: id
    }
}
const FilterListItem = (data) => {
    return {
        type: "AppPokemon/FilterType",
        payload: data
    }
}
const SearchPokemon = (data) => {
    return {
        type: "AppPokemon/SearchPokemon",
        payload: data
    }
}
export {wishList, RemoveitemWishList, CompareList, RemoveItemCompareList, FilterListItem,SearchPokemon};