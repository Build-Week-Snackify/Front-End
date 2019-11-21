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
          src= "{props.image}"
          alt="{props.name}"
        />
        <CardBody className ="card-container">
          {/* <Link to={`/snacklist/${props.Name}`}> */}
            <CardTitle className ="name">Name: {props.name}</CardTitle>
            <CardSubtitle>Price: {props.price}</CardSubtitle>
            <CardSubtitle>Weight: {props.weight}</CardSubtitle>
          {/* </Link> */}
        </CardBody>
      </Card>
    </Col>
  );
};
export default SarahSnack;