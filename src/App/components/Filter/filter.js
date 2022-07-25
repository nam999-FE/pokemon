import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { FilterListItem } from "../../../Actions/actions";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 100;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const names = [
  {type: 'none'},
  {type: 'water'},
  {type: 'fire'},
  {type: 'grass'},
  {type: 'ground'},
  {type: 'rock'},
  {type: 'steel'},
  {type: 'ice'},
  {type: 'electric'},
  {type: 'dragon'},
  {type: 'ghost'},
  {type: 'psychic'},
  {type: 'normal'},
  {type: 'fighting'},
  {type: 'poison'},
  {type: 'bug'},
  {type: 'flying'},
  {type: 'dark'},
  {type: 'fairy'}
];
function Filter({dataPokemon}) {
  const [personName, setPersonName] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    setPersonName(value);
    dispatch(FilterListItem(value));
  };
  return (
    <div>
      <Box padding = {{xs : 0, sm : 1, md: 1, lg : 1}} > 
      <FormControl sx= {{ m: 1, width: 300}} >
        <InputLabel>Type Pokemon</InputLabel>
        <Select
          value = {personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag Pokemon" />}
          MenuProps={MenuProps}
          defaultValue = "choose"
        >
          {names.map((name) => (
            name.type === "none" ? (
              <MenuItem value = "" > <em> None</em> </MenuItem>
            ) : <MenuItem value = {name.type} > <em> {name.type}</em> </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>
    </div>
  );
}
export default Filter