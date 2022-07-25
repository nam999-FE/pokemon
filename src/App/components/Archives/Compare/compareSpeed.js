import { ListItemText } from "@mui/material";
import { comparePokemonSelector } from "../../selector";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "../../../../App.css";
import {
  faHeart,
  faShield,
  faHammer,
  faShoePrints,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
function CompareSpeed({ props, index }) {
  const compare = useSelector(comparePokemonSelector);
  return compare.length === 2 ? (
    <ListItemText>
      {index === 0 && props.speed > compare[1].speed ? (
        <ListItemText sx={{ backgroundColor: "#af0707" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShoePrints} color="black" />
            <span className="paddingIconComapre">{props.hp}</span>
          </ListItemText>
        </ListItemText>
      ) : index === 0 && props.speed < compare[1].speed ? (
        <ListItemText sx={{ backgroundColor: "#d0d024" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShoePrints} color="black" />
            <span className="paddingIconComapre">{props.hp}</span>
          </ListItemText>
        </ListItemText>
      ) : index === 1 && props.speed > compare[0].speed ? (
        <ListItemText sx={{ backgroundColor: "#af0707" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShoePrints} color="black" />
            <span className="paddingIconComapre">{props.hp}</span>
          </ListItemText>
        </ListItemText>
      ) : (
        <ListItemText sx={{ backgroundColor: "#d0d024" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShoePrints} color="black" />
            <span className="paddingIconComapre">{props.hp}</span>
          </ListItemText>
        </ListItemText>
      )}
    </ListItemText>
  ) : (
    <ListItemText>
      <ListItemText>
        <FontAwesomeIcon icon={faShoePrints} color="black" />
        <span className="paddingIconComapre">{props.hp}</span>
      </ListItemText>
    </ListItemText>
  );
}
export default CompareSpeed;
