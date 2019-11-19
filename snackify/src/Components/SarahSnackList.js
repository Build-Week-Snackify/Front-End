import React, { useState, useEffect } from "react";
import axios from "axios";
import SarahSnack from "./SarahSnack";
import { Container, Row } from "reactstrap";



export default function SarahSnack() {
  const [snack, setSnack] = useState ([]);

  useEffect(() => {
    axios
    .get("someSnackAPI")
    .then(response => {
      console.log(response);
      setPeople(response.data.results);      
    })//ends then
    .catch(error => {
        console.log("The data was not returned", error);
    });
  }, []);//ends useEffect

  return (
    <Container>
      <Row>
        {snack.map((item, index) => (
             <StarWarsCard 
             key={index}
             name={item.name}
             type={item.type}
             servings={item.servings}
             weight={item.weight}
             price={item.price}
             //these are coming from a different API-figure out how to do them both
             calories={item.calories}
             fat={item.fat}
             sugar={item.sugar}
             protein={item.protein}
             carbs={item.carbs}
             allergens={item.allergens}/>
        ))}
        </Row>
    </Container>
  );//ends return
}//ends function