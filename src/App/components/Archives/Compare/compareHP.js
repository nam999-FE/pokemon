import { ListItemText } from "@mui/material";
import { comparePokemonSelector } from "../../selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "../../../../App.css";
import {
  faHeart,
  faShield,
  faHammer,
  faShoePrints,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function CompareHp({ props, index }) {
  const compare = useSelector(comparePokemonSelector);
  return compare.length === 2 ? (
    <ListItemText>
      {index === 0 && props.hp > compare[1].hp ? (
        <ListItemText sx={{ backgroundColor: "#af0707" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShield} color="red" />
            <span className="paddingIconComapre">{props.hp}</span>
          </ListItemText>
        </ListItemText>
      ) : index === 0 && props.hp < compare[1].hp ? (
        <ListItemText sx={{ backgroundColor: "#d0d024" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShield} color="red" />
            <span className="paddingIconComapre">{props.hp}</span>
          </ListItemText>
        </ListItemText>
      ) : index === 1 && props.hp > compare[0].hp ? (
        <ListItemText sx={{ backgroundColor: "#af0707" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShield} color="red" />
            <span className="paddingIconComapre">{props.hp}</span>
          </ListItemText>
        </ListItemText>
      ) : (
        <ListItemText sx={{ backgroundColor: "#d0d024" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShield} color="red" />
            <span className="paddingIconComapre">{props.hp}</span>
          </ListItemText>
        </ListItemText>
      )}
    </ListItemText>
  ) : (
    <ListItemText>
      <ListItemText>
        <FontAwesomeIcon icon={faShield} color="red" />
        <span className="paddingIconComapre">{props.hp}</span>
      </ListItemText>
    </ListItemText>
  );
}
export default CompareHp;
