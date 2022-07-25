import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShield,
  faHammer,
  faShoePrints,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  Box,
  Typography,
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
} from "@mui/material";
function Descriptions({
  open,
  close,
  pokemonID,
  pokemonName,
  pokemonHeight,
  pokemonWeight,
  pokemonHP,
  pokemonAttack,
  pokemonDefense,
  pokemonSpecialAttack,
  pokemonSpecialDefense,
  pokemonSpeed,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <List 
          aria-labelledby="list-subheader"
          subheader={
            <ListSubheader component="div" id="list-subheader" variant="h6">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {pokemonName}
              </Typography>
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemText>
              <ListItemText>Height</ListItemText>
            </ListItemText>
            <ListItemText>{pokemonHeight} cm</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <ListItemText>Weight</ListItemText>
            </ListItemText>
            <ListItemText>{pokemonWeight} kg</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <FontAwesomeIcon icon={faHeart} color="red" />
            </ListItemText>
            <ListItemText>{pokemonHP}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <FontAwesomeIcon icon={faShield} color="blue" />
            </ListItemText>
            <ListItemText>{pokemonDefense}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <FontAwesomeIcon icon={faHammer} color="gray" />
            </ListItemText>
            <ListItemText>{pokemonAttack}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <FontAwesomeIcon icon={faShoePrints} color="black" />
            </ListItemText>
            <ListItemText>{pokemonSpeed}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <FontAwesomeIcon icon={faShield} color="blue" />
              <FontAwesomeIcon icon={faAnglesRight} color="black" />
            </ListItemText>
            <ListItemText>{pokemonSpecialDefense}</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <FontAwesomeIcon icon={faHammer} color="gray" />
              <FontAwesomeIcon icon={faAnglesRight} color="black" />
            </ListItemText>
            <ListItemText>{pokemonSpecialAttack}</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </Modal>
  );
}
export default Descriptions;
