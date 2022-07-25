import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/system";
import { FormControl, OutlinedInput, InputAdornment, Autocomplete } from "@mui/material";
import { useState, useEffect } from "react";
import WishList from "./WishList/wishList";
import Compare from "./Compare/compare";
import { useSelector } from "react-redux";
import { pokemonSelector, comparePokemonSelector } from "../selector";
import BalanceIcon from "@mui/icons-material/Balance";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { SearchPokemon } from "../../../Actions/actions";
import { useDebounce } from "usehooks-ts";
import { SuccesSearch, WarningSearch } from "../../../Notification/Notification";
import { searchPokemon } from "../selector";
const FilterPokemon = styled("div")({
  display: "flex",
  position: "fixed",
  top: "0",
  width: "100%",
  backgroundColor: "#fff",
  zIndex: 999,
  justifyContent: "flex-end",
  height: "66px",
  borderBottom: "1px solid #e8ebed"
});
function Archives() {
  const [open, setOpen] = useState(false);
  const [search, setSearchPokemon] = useState("");
  const [openCompare, setOpenCompare] = useState(false);
  const [openMessageSearch, setOpenMessageSeacrh] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenCompare = () => setOpenCompare(true);
  const handleCloseCompare = () => setOpenCompare(false);
  const wishList = useSelector(pokemonSelector);
  const compare = useSelector(comparePokemonSelector);
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(search, 500);

  const searchStatus = useSelector(searchPokemon);
  const handleClickMessageSearch = () => {
    setOpenMessageSeacrh(true);
  };
  const handleClickMessageCloseSearch = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMessageSeacrh(false);
  };

  const handleSearchPokemon = async (e) => {
    const covertText = e.target.value.toLowerCase();
    setSearchPokemon(covertText);
  };
  const handleDebounce = async () => {
    try {
      const dataRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
      if (!dataRes.ok) {
        const message = `An error has occured: ${dataRes.status}`;
        throw new Error(message);
      }
      const dataJson = await dataRes.json();
      if(search !== "") {
        handleClickMessageSearch();
        dispatch(SearchPokemon({
          status: true,
          data: dataJson
        }));
      }
    } catch(err) {
      handleClickMessageSearch();
      dispatch(SearchPokemon({
        status: false,
        data: "FETCH API NOT FOUND"
      }));
    }
  }
  useEffect(() => {
    handleDebounce();
  }, [debouncedValue])
  return (
    <>
    <FilterPokemon>
      <Box
        width = {{sm: 450, md: 450, lg: 450}}
        left = {{xs: "35%",sm: "50%", md: "50%", lg: "50%"}}
        sx={{
          m: 1,
          height: "40px",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
          margin: "0px",
        }}
      >
        <OutlinedInput
          sx={{ width: "100%", borderRadius: "30px", height: "40px" }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          }
          placeholder = "Search Pokemon"
          value={search}
          onChange={handleSearchPokemon}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "70px",
          paddingRight: "27px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ position: "relative", textAlign: "right" }}
          onClick={handleOpenCompare}
        >
          <BalanceIcon />
          <Box className="cirkle">{compare.length}</Box>
        </Box>
        <Box
          sx={{ position: "relative", textAlign: "right" }}
          onClick={handleOpen}
        >
          <FavoriteBorderIcon />
          <Box className="cirkle">{wishList.length}</Box>
        </Box>
      </Box>
      <WishList open={open} close={handleClose} />
      <Compare open={openCompare} close={handleCloseCompare} />
    </FilterPokemon>
    {searchStatus.status ? (
      <SuccesSearch open={openMessageSearch} close={handleClickMessageCloseSearch} />
      ) : (
        <WarningSearch open={openMessageSearch} close={handleClickMessageCloseSearch} />
      )}
    </>
  );
}
export default Archives;
