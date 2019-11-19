import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
import { Col } from "reactstrap";  

const SarahSnack = props => {
    console.log(props);
  return (
    <Col xs="12" s="6" md="4">
      <Card className="card-main">
        <CardImg
          top width="100%"
          src= "{props.image}"
          alt="{props.name}"
        />
        <CardBody className ="card-container">
          <CardTitle className ="name">Name: {props.name}</CardTitle>
          <CardSubtitle>Type: {props.type}</CardSubtitle>
          <CardSubtitle>Number of Servings: {props.servings}</CardSubtitle>
          <CardSubtitle>Shipping weight{props.weight}</CardSubtitle>
          <CardSubtitle>Price: {props.price}</CardSubtitle>
          <CardSubtitle>Nutritional Information</CardSubtitle>
          <CardSubtitle>Calories: {props.calories}</CardSubtitle>
          <CardSubtitle>Fat: {props.fat}</CardSubtitle> 
          <CardSubtitle>Sugar: {props.sugar}</CardSubtitle> 
          <CardSubtitle>Protein: {props.protein}</CardSubtitle> 
          <CardSubtitle>Carbs: {props.carbs}</CardSubtitle> 
          <CardSubtitle>Allergens: {props.allergens}</CardSubtitle>          
        </CardBody>
      </Card>
    </Col>
  );
};
export default SarahSnack;