import React, {useState, useEffect} from "react";
import axios from "axios";
import SnackCard from "./SnackCard";
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
          // <Link to={`/snacklist/${item.id}`}>
             <SnackCard
             key={index}
             id={item.id}
             name={item.name}
             numberOfServings={item.numberOfServings}
             price={item.price}
             totalWeight={item.totalWeight}
             subId={item.subId}
             />
          // </Link>   
        ))}
        </Row>
    </Container>
  );//ends return
}//ends function