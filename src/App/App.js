import { useEffect, useRef, useState } from "react";
import PokemonPhoto from "../App/components/PokemonPhoto/PokemonPhoto";
import { Grid, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { pokemonSelector, comparePokemonSelector } from "./components/selector";
import { useDispatch } from "react-redux";
import { wishList, CompareList } from "../Actions/actions";
import { Success, Warning } from "../Notification/Notification";
import Filter from "./components/Filter/filter";
import { searchPokemon, filterPokemonSelector } from "./components/selector";
function App() {
  const [loadPokemon, setloadPokemon] = useState([]);
  const [loadTypePokemon, setTypeloadPokemon] = useState([]);
  const [openMessageWishList, setOpenMessageWishList] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const list = useSelector(pokemonSelector);
  const compare = useSelector(comparePokemonSelector);
  const dispatch = useDispatch();
  const checkWishList = useRef();
  const checkCompare = useRef();
  const type = useSelector(filterPokemonSelector);
  const search = useSelector(searchPokemon);
  const handleClickMessageWishList = () => {
    setOpenMessageWishList(true);
  };
  const handleClickMessageClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMessageWishList(false);
  };
  const filterTypePokemon = async () => {
    try {
      const dataRes = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      if (!dataRes.ok) {
        const message = `An error has occured: ${dataRes.status}`;
        throw new Error(message);
      }
      const dataTypeJson = await dataRes.json();
      listTypedPokemon(dataTypeJson.pokemon);
    } catch (err) {
      console.log(err);
    }
  };
  function listTypedPokemon(data) {
    data.forEach(async (link) => {
      try {
        const dataRes = await fetch(link.pokemon.url);
        if (!dataRes.ok) {
          const message = `An error has occured: ${dataRes.status}`;
          throw new Error(message);
        }
        const dataJson = await dataRes.json();
        setTypeloadPokemon((prev) => [...prev, dataJson]);
      } catch (err) {
        console.log(err);
      }
    });
  }
  const getAllData = async () => {
    try {
      const dataRes = await fetch(url);
      if (!dataRes.ok) {
        const message = `An error has occured: ${dataRes.status}`;
        throw new Error(message);
      }
      const dataJson = await dataRes.json();

      setUrl(dataJson.next);
      objectPokemon(dataJson.results);
    } catch (err) {
      console.log(err);
    }
  };
  function objectPokemon(datas) {
    datas.forEach(async (data, index) => {
      try {
        const dataRes = await fetch(data.url);
        if (!dataRes.ok) {
          const message = `An error has occured: ${dataRes.status}`;
          throw new Error(message);
        }
        const dataJson = await dataRes.json();
        setloadPokemon((prev) => [...prev, dataJson]);
      } catch (error) {
        console.log(error);
      }
    });
  }
  const handleCompare = (data) => {
    if (compare.length <= 1) {
      checkCompare.current = !!compare.find((el) => el.id === data.pokemonID);
      !checkCompare.current
        ? dispatch(CompareList(data))
        : console.log("Da co trong store");
    }
  };
  const handleWishList = (data) => {
    /** Add wish list 1 card only */
    handleClickMessageWishList();
    checkWishList.current = !!list.find((el) => el.id === data.pokemonID);
    !checkWishList.current
      ? dispatch(wishList(data))
      : console.log("Da co trong store");
  };
  useEffect(() => {}, [search]);
  useEffect(() => {
    getAllData();
  }, []);
  useEffect(() => {
    filterTypePokemon();
    setTypeloadPokemon([]);
  }, [type]);
  return (
    <>
      <Filter dataPokemon={loadPokemon} />
      <Box padding={{sm: 2, md: 2, lg: 2}} >
        <Grid
          container
          sx={{ paddingTop: "25px" }}
          spacing = {2} 
          columns = {{xs : 4, sm: 4, md: 5, lg: 5}}       
        >
          {type.length === 0 && !search.status && search !== null ? (
            loadPokemon.map((pokemon, index) => (
             
                <PokemonPhoto
                  key={index}
                  url={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  id={pokemon.id}
                  name={pokemon.name}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  nameHP={pokemon.stats[0].stat.name}
                  hp={pokemon.stats[0].base_stat}
                  nameAttack={pokemon.stats[1].stat.name}
                  attack={pokemon.stats[1].base_stat}
                  nameDefense={pokemon.stats[2].stat.name}
                  defense={pokemon.stats[2].base_stat}
                  nameSpecialAttack={pokemon.stats[3].stat.name}
                  specialattack={pokemon.stats[3].base_stat}
                  nameSpecialDefense={pokemon.stats[4].stat.name}
                  specialdefense={pokemon.stats[4].base_stat}
                  nameSpeed={pokemon.stats[5].stat.name}
                  speed={pokemon.stats[5].base_stat}
                  handleAddWishList={handleWishList}
                  handleAddCompare={handleCompare}
                />
            ))
          ) : search.status ? (
           
              <PokemonPhoto
                url={search.data.sprites.other.dream_world.front_default}
                type={search.data.types[0].type.name}
                id={search.data.id}
                name={search.data.name}
                height={search.data.height}
                weight={search.data.weight}
                nameHP={search.data.stats[0].stat.name}
                hp={search.data.stats[0].base_stat}
                nameAttack={search.data.stats[1].stat.name}
                attack={search.data.stats[1].base_stat}
                nameDefense={search.data.stats[2].stat.name}
                defense={search.data.stats[2].base_stat}
                nameSpecialAttack={search.data.stats[3].stat.name}
                specialattack={search.data.stats[3].base_stat}
                nameSpecialDefense={search.data.stats[4].stat.name}
                specialdefense={search.data.stats[4].base_stat}
                nameSpeed={search.data.stats[5].stat.name}
                speed={search.data.stats[5].base_stat}
                handleAddWishList={handleWishList}
                handleAddCompare={handleCompare}
              />
            
          ) : !search.status && type.length > 0 ? (
            loadTypePokemon.map((pokemon, index) =>
              pokemon.sprites.other.dream_world.front_default !== null ? (
                
                  <PokemonPhoto
                    key={index}
                    url={pokemon.sprites.other.dream_world.front_default}
                    type={pokemon.types[0].type.name}
                    id={pokemon.id}
                    name={pokemon.name}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    nameHP={pokemon.stats[0].stat.name}
                    hp={pokemon.stats[0].base_stat}
                    nameAttack={pokemon.stats[1].stat.name}
                    attack={pokemon.stats[1].base_stat}
                    nameDefense={pokemon.stats[2].stat.name}
                    defense={pokemon.stats[2].base_stat}
                    nameSpecialAttack={pokemon.stats[3].stat.name}
                    specialattack={pokemon.stats[3].base_stat}
                    nameSpecialDefense={pokemon.stats[4].stat.name}
                    specialdefense={pokemon.stats[4].base_stat}
                    nameSpeed={pokemon.stats[5].stat.name}
                    speed={pokemon.stats[5].base_stat}
                    handleAddWishList={handleWishList}
                    handleAddCompare={handleCompare}
                  />
                
              ) : null
            )
          ) : null}
        </Grid>
      </Box>
      <Box
        container
        justifyContent="center"
        sx={{ margin: "50px", textAlign: "center" }}
      >
        <Button className="loadmore" variant="contained" onClick={getAllData}>
          LOAD MORE
        </Button>
      </Box>
      {/* Notifycation Wish List */}
      {!checkWishList.current ? (
        <Success open={openMessageWishList} close={handleClickMessageClose} />
      ) : (
        <Warning open={openMessageWishList} close={handleClickMessageClose} />
      )}
    </>
  );
}

export default App;
