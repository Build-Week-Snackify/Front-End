import React, {useState, useEffect} from "react";
import axios from "axios";
import SarahSnack from "./SarahSnack";
import { Container, Row } from "reactstrap";



export default function SnackList() {
  const [snack, setSnack] = useState ([]);

  useEffect(() => {
    axios
    .get("https://snackify7.herokuapp.com/snacks")
    .then(response => {
      console.log(response);
      setSnack(response.snackReducer.snacks);      
    })//ends then
    .catch(error => {
        console.log("The data was not returned", error);
    });
  }, []);//ends useEffect


  
  return (
    <Container>
      <Row>
        {snack.map((item, index) => (
          // <Link to={`/snacklist/${item.Name}`}>
             <SarahSnack
             key={index}
             image={item.Image}
             name={item.Name}
             price={item.Price}
             weight={item.Weight}
             />
          // </Link>   
        ))}
        </Row>
    </Container>
  );//ends return
}//ends function