import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../css/SnackCard.css"

const SnackCard = props => {
  // console.log(props);



  return (
    <Col xs="12" s="6" md="4">
      <Card className="card-main"
      >
        {/* <Link to={`/snacklist/${props.id}`}> */}
        <CardImg
          top
          width="100%"
          src={props.randomCardImage}
          alt="{props.id}"
        />
        <CardBody className="card-container">
          <CardTitle className="name">{props.name}</CardTitle>
          <CardSubtitle>
            Number of Servings: {props.numberOfServings}
          </CardSubtitle>
          <CardSubtitle>Price: ${props.price}</CardSubtitle>
          <CardSubtitle>Shipping Weight (lbs): {props.totalWeight}</CardSubtitle>
          <Button className="save" onClick={()=>{alert("This item has been added to your subscription");}} >Add to Subscription</Button>
          <Button className="buy" onClick={()=>{alert("Thank you for your one time purchase!");}}>One Time Purchase</Button>
        </CardBody>
        {/* </Link> */}
      </Card>
    </Col>
  );
};
export default SnackCard;
