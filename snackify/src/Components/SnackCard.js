import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const SnackCard = props => {
  // console.log(props);
  return (
    <Col xs="12" s="6" md="4">
      <Card
        className="card-main"
        style={{
          boxShadow:
            "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
          border: "solid 1px rgba(0, 0, 0, 0.2)"
        }}
      >
        <CardImg
          top
          width="100%"
          src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="{props.id}"
        />
        <CardBody className="card-container">
          {/* <Link to={`/snacklist/${props.id}`}> */}
          <CardTitle className="name">{props.name}</CardTitle>
          <CardSubtitle>
            Number of Servings: {props.numberOfServings}
          </CardSubtitle>
          <CardSubtitle>Price: ${props.price}</CardSubtitle>
          <CardSubtitle>Shipping Weight: {props.totalWeight}</CardSubtitle>
          {/* </Link> */}
        </CardBody>
      </Card>
    </Col>
  );
};
export default SnackCard;
