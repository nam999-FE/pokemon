import Descriptions from "../Descriptions/Descriptions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BalanceIcon from "@mui/icons-material/Balance";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import {
  Grid,
  Paper,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

function PokemonPhoto({
  url,
  id,
  name,
  height,
  weight,
  nameHP,
  hp,
  nameAttack,
  attack,
  nameDefense,
  defense,
  nameSpecialAttack,
  specialattack,
  nameSpecialDefense,
  specialdefense,
  nameSpeed,
  speed,
  type,
  handleAddWishList,
  handleAddCompare,
}) {
  const [open, setOpen] = useState(false);
  const namePokemon = name.charAt(0).toUpperCase() + name.slice(1);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid 
     item
     xs = {2}
     sm = {1}
     md = {1}
     lg = {1}
    >
      <Paper className={`item ${type}`} variant="outlined">
        <Card sx={{ display: "flex", justifyContent: "center" }}>
          <img src={url} alt="#" width="70%" height="250px" />
        </Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {namePokemon}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type : {type}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Tooltip title="Add wish list" placement="bottom" arrow>
            <Button
              className="button"
              size="small"
              onClick={() =>
                handleAddWishList({
                  pokemonID: id,
                  pokemonName: namePokemon,
                  pokemonType: type,
                  pokemonUrl: url,
                })
              }
            >
              <FavoriteIcon sx={{ color: "#c92e2e" }} />
            </Button>
          </Tooltip>
          <Tooltip title="Add to compare" placement="bottom" arrow>
            <Button
              className="button"
              onClick={() =>
                handleAddCompare({
                  pokemonID: id,
                  pokemonName: namePokemon,
                  pokemonType: type,
                  pokemonUrl: url,
                  pokemonHP: hp,
                  pokemonAttack: attack,
                  pokemonDefense: defense,
                  pokemonSpeed: speed,
                })
              }
            >
              <BalanceIcon sx={{ color: "#4b2d2de3" }} />
            </Button>
          </Tooltip>
          <Tooltip title="More infomation" placement="bottom" arrow>
            <Button className="button" size="small" onClick={handleOpen}>
              <MoreHorizIcon sx={{ color: "#fff" }} />
            </Button>
          </Tooltip>
        </CardActions>
        <Descriptions
          open={open}
          close={handleClose}
          type={type}
          pokemonID={id}
          pokemonName={namePokemon}
          pokemonHeight={height}
          pokemonWeight={weight}
          pokemonNameHP={nameHP}
          pokemonHP={hp}
          pokemonNameAttack={nameAttack}
          pokemonAttack={attack}
          pokemonNameDefence={nameDefense}
          pokemonDefense={defense}
          pokemonNameSpecialAttack={nameSpecialAttack}
          pokemonSpecialAttack={specialattack}
          pokemonNameSpecialDefense={nameSpecialDefense}
          pokemonSpecialDefense={specialdefense}
          pokemonNameSpeed={nameSpeed}
          pokemonSpeed={speed}
        />
      </Paper>
    </Grid>
  );
}
export default PokemonPhoto;
