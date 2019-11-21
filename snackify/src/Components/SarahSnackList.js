import React, {useState, useEffect} from "react";
import axios from "axios";
import SarahSnack from "./SarahSnack";
import { Container, Row } from "reactstrap";
import {axiosWithLoginAuth} from '../Utils/axiosWithLoginAuth';



export default function SnackList() {
  const [snack, setSnack] = useState ([]);

  useEffect(() => {
    axiosWithLoginAuth()
    .get("/snacks")
    .then(response => {
      console.log(response.data);
      setSnack(response.data);      
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
             image={item.image}
             name={item.name}
             price={item.price}
             weight={item.weight}
             />
          // </Link>   
        ))}
        </Row>
    </Container>
  );//ends return
}//ends function