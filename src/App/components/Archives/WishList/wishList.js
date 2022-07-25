import { Modal, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { pokemonSelector } from "../../selector";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { RemoveitemWishList } from "../../../../Actions/actions";
import { useDispatch } from "react-redux";
import style from "../styleModal";
import "../../../../App.css";
function WishList({ open, close }) {
  const wishList = useSelector(pokemonSelector);
  const dispatch = useDispatch();
  const handleDeleteWishList = (id) => {
    dispatch(RemoveitemWishList(id));
  };
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {wishList.length > 0 ? (
        <Box sx={style} width = {{xs: 300,sm : 500}}>
          <ImageList sx={{ width: "100%" }} cols={4}>
            {wishList.map((item) => (
              <ImageListItem
                key={item.id}
                className={`item ${item.type}`}
                sx={{
                  padding: "25px",
                  position: "relative",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  className="img"
                />
                <ImageListItemBar
                  sx={{ textAlign: "center" }}
                  className={`item ${item.type}`}
                  title={item.name}
                  subtitle={<span>Type: {item.type}</span>}
                  position="below"
                />
                <Button
                  onClick={() => handleDeleteWishList(item.id)}
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
        <Box sx = {style} width = {{ xs: 300, sm : 500}}>
          <Box
            sx={{
              width: "100%",
              height: 450,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "600" }}>
              Wish List Empty !
            </Typography>
          </Box>
        </Box>
      )}
    </Modal>
  );
}
export default WishList;
