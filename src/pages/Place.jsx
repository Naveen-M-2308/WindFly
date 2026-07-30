import Button from "@mui/material/Button";
import { TbShoppingCartPlus } from "react-icons/tb";
import "../styles/Place.css";
import Book from '../components/Book'

function Place({ place}) {
  return (
    <>
        <div id="main2">
            
          <div id="main21">
            <img src={place.img} alt="" />
          </div>

          <div id="main22">
            <h3>{place.name}</h3>
            <p>{place.price}</p>
           
          </div>

          <div>
            <Book />
          </div>
        </div>
        
    </>
  );
}

export default Place;