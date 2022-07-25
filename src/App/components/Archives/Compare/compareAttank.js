import { ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "../../../../App.css";
import {
  faHammer
} from "@fortawesome/free-solid-svg-icons";
import { comparePokemonSelector } from "../../selector";
import { useSelector } from "react-redux";
function CompareAttank({ props, index }) {
  const compare = useSelector(comparePokemonSelector);
  console.log(compare.length);
  return compare.length === 2 ? (
    <ListItemText>
      {index === 0 && props.attack >= compare[1].attack ? (
        <ListItemText sx={{ backgroundColor: "#af0707" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faHammer} color="grey" />
            <span className="paddingIconComapre">{compare[1].attack}</span>
          </ListItemText>
        </ListItemText>
      ) : index === 0 && props.attack <= compare[1].attack ? (
        <ListItemText sx={{ backgroundColor: "#d0d024" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faHammer} color="grey" />
            <span className="paddingIconComapre">{props.attack}</span>
          </ListItemText>
        </ListItemText>
      ) : index === 1 && props.attack >= compare[0].attack ? (
        <ListItemText sx={{ backgroundColor: "#af0707" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faHammer} color="grey" />
            <span className="paddingIconComapre">{props.attack}</span>
          </ListItemText>
        </ListItemText>
      ) : (
        <ListItemText sx={{ backgroundColor: "#d0d024" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faHammer} color="grey" />
            <span className="paddingIconComapre">{props.attack}</span>
          </ListItemText>
        </ListItemText>
      )}
    </ListItemText>
  ) : (
    <ListItemText>
      <ListItemText>
        <FontAwesomeIcon icon={faHammer} color="grey" />
        <span className="paddingIconComapre">{props.attack}</span>
      </ListItemText>
    </ListItemText>
  );
}
export default CompareAttank;
