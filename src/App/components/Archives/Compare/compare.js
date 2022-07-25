import {
  Modal,
  Box,
  ImageListItemBar,
  List,
  ListItemText,
  ListSubheader,
  Typography,
  Button,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ImageListItem, ImageList } from "@mui/material";
import { comparePokemonSelector } from "../../selector";
import { useSelector } from "react-redux";
import style from "../styleModal";
import { useDispatch } from "react-redux";
import { RemoveItemCompareList } from "../../../../Actions/actions";
import "../../../../App.css";
import Note from "./describe";
import CompareAttank from "./compareAttank";
import CompareHp from "./compareHP";
import CompareDefence from "./compareDefence";
import CompareSpeed from "./compareSpeed";
function Compare({ open, close }) {
  const compare = useSelector(comparePokemonSelector);
  const dispatch = useDispatch();
  const handleDeleteCompareItem = (id) => {
    dispatch(RemoveItemCompareList(id));
  };
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {compare.length > 0 ? (
        <Box sx={style}>
          <Note />
          <ImageList sx={{ width: "100%" }} cols={2} >
            {compare.map((item, index) => (
              <ImageListItem
                className={`item ${item.type}`}
                key={item.id}
                sx={{ justifyContent: "flex-end", borderRadius: "15px" }}
              >
                <div className="imageCompare">
                  <img
                    src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    className="imageCompare_item"
                  />
                </div>
                <ImageListItemBar
                  sx={{ textAlign: "center" }}
                  subtitle={
                    <List
                      aria-labelledby="list-subheader"
                      subheader={
                        <ListSubheader
                          className={`item ${item.type}`}
                          component="div"
                          id="list-subheader"
                          variant="h6"
                        >
                          <Typography
                            className={`item ${item.type}`}
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            {item.name}
                          </Typography>
                        </ListSubheader>
                      }
                    >
                      <ListItemText>
                        <ListItemText>Type: {item.type}</ListItemText>
                      </ListItemText>
                      <ListItemText>
                        <CompareAttank props={item} index={index} />
                      </ListItemText>
                      <ListItemText>
                        <CompareHp props={item} index={index} />
                      </ListItemText>
                      <ListItemText>
                        <CompareDefence props={item} index={index} />
                      </ListItemText>
                      <ListItemText>
                        <CompareSpeed props={item} index={index} />
                      </ListItemText>
                    </List>
                  }
                  position="below"
                />
                <Button
                  onClick={() => handleDeleteCompareItem(item.id)}
                  className="button"
                  sx={{
                    position: "absolute",
                    right: "10px",
                    borderRadius: "50%",
                    top: "10px",
                  }}
                >
                  <HighlightOffIcon />
                </Button>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : (
        <Box sx={style}>
          <Box sx={{ width: "100%", height: 450, display: "flex", justifyContent: "center", alignItems: "center" }} >
            <Typography variant="h3" sx = {{fontWeight: "600"}} >Compare List Empty !</Typography>
          </Box>
        </Box>
      )}
    </Modal>
  );
}
export default Compare;
