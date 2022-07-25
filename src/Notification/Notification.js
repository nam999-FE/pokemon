import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Success(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={500} onClose={props.close}>
        <Alert onClose={props.close} severity="success" sx={{ width: "100%" }}>
          Add to wish list !
        </Alert>
      </Snackbar>
    </Stack>
  );
}
function Warning(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={500} onClose={props.close}>
        <Alert onClose={props.close} severity="warning" sx={{ width: "100%" }}>
            Can't add tag !
        </Alert>
      </Snackbar>
    </Stack>
  );
}

function SuccesSearch(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={1000} onClose={props.close}>
        <Alert onClose={props.close} severity="success" sx={{ width: "100%" }}>
          Successful search for pokemon !
        </Alert>
      </Snackbar>
    </Stack>
  );
}
function WarningSearch(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={props.open} autoHideDuration={1000} onClose={props.close}>
        <Alert onClose={props.close} severity="warning" sx={{ width: "100%" }}>
           Not found Pokemon !
        </Alert>
      </Snackbar>
    </Stack>
  );
}
export { Success, Warning, SuccesSearch, WarningSearch};
