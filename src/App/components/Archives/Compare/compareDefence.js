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
function CompareDefence({ props, index }) {
  const compare = useSelector(comparePokemonSelector);
  return compare.length === 2 ? (
    <ListItemText>
      {index === 0 && props.defence > compare[1].defence ? (
        <ListItemText sx={{ backgroundColor: "#af0707" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShield} color="blue" />
            <span className="paddingIconComapre">{props.defence}</span>
          </ListItemText>
        </ListItemText>
      ) : index === 0 && props.defence < compare[1].defence ? (
        <ListItemText sx={{ backgroundColor: "#d0d024" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShield} color="blue" />
            <span className="paddingIconComapre">{props.defence}</span>
          </ListItemText>
        </ListItemText>
      ) : index === 1 && props.defence > compare[0].defence ? (
        <ListItemText sx={{ backgroundColor: "#af0707" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShield} color="blue" />
            <span className="paddingIconComapre">{props.defence}</span>
          </ListItemText>
        </ListItemText>
      ) : (
        <ListItemText sx={{ backgroundColor: "#d0d024" }}>
          <ListItemText>
            <FontAwesomeIcon icon={faShield} color="blue" />
            <span className="paddingIconComapre">{props.defence}</span>
          </ListItemText>
        </ListItemText>
      )}
    </ListItemText>
  ) : (
    <ListItemText>
      <ListItemText>
        <FontAwesomeIcon icon={faShield} color="blue" />
        <span className="paddingIconComapre">{props.defence}</span>
      </ListItemText>
    </ListItemText>
  );
}
export default CompareDefence;
