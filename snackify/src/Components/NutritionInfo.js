import React, { useState, useEffect } from "react";
import NutritionList from "./NutritionList";
import { Container, Row } from "reactstrap";
import { axiosWithLoginAuth } from "../Utils/axiosWithLoginAuth";



export default function NutritionInfo() {
  const [nutrition, setNutrition] = useState ([]);

  useEffect(() => {
    axiosWithLoginAuth()
    .get("/snacks/:id/nutrition")
    .then(response => {
      console.log(response);
      setNutrition(response.data.nutrition);      
    })//ends then
    .catch(error => {
        console.log("The data was not returned", error);
    });
  }, []);//ends useEffect

  return (
    <Container>
      <Row>
        {nutrition.map((item, index) => (
             <NutritionList 
             key={index}
             id={item.id}
             calories={item.calories}
             totalFat={item.totalFat}
             protein={item.protein}
             carbs={item.carbs}
             allergens={item.allergens}
             snackId={item.snackId}
             />
        ))}
        </Row>
    </Container>
  );//ends return
}//ends function