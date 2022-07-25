import { styled } from "@mui/system";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const BoxNote = styled("div")({
  display: "flex",
});
function Note() {
  return (
    <Box sx = {{display: "flex"}} >
      <BoxNote>
        <Box
          sx={{ width: "50px", height: "25px", backgroundColor: "#af0707", borderRadius: "5px" }}
        ></Box>
        <Typography sx = {{paddingLeft: "5px"}} > Red indicator is stronger </Typography>
      </BoxNote>
      <BoxNote sx = {{paddingLeft: "20px"}} >
        <Box
          sx={{ width: "50px", height: "25px", backgroundColor: "#d0d024",borderRadius: "5px" }}
        ></Box>
        <Typography sx = {{paddingLeft: "5px"}}> Yellow is a weaker indicator </Typography>
      </BoxNote>
    </Box>
  );
}
export default Note;
