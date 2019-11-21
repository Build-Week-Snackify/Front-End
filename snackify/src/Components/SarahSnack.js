import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { Col } from "reactstrap";  
import {Link} from "react-router-dom";

const SarahSnack = props => {
    // console.log(props);
  return (
    <Col xs="12" s="6" md="4">
      <Card className="card-main">
        <CardImg
          top width="100%"
          src= "../assets/images/food.png"
          alt="{props.id}"
        />
        <CardBody className ="card-container">
          {/* <Link to={`/snacklist/${props.id}`}> */}
            <CardTitle className ="name">Name: {props.name}</CardTitle>
            <CardSubtitle>Number of Servings: {props.numberOfServings}</CardSubtitle>
            <CardSubtitle>Price: ${props.price}0</CardSubtitle>
            <CardSubtitle>Shipping Weight: {props.totalWeight}</CardSubtitle>
          {/* </Link> */}
        </CardBody>
      </Card>
    </Col>
  );
};
export default SarahSnack;