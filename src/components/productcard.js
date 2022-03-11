import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../states/index";

function Productcard(props) {
  const { item } = props;
  var price = item.details.price;
  var pricearr = price.toString().split(".");

  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <Card className="card-width border-0 mx-auto">
        <div className="p-2 ms-auto me-0">
          {item.details.tag !== "" && (
            <Card.Link id="cardfreeshippping" className="btn btn-sm btn-dark">
              {item.details.tag}
            </Card.Link>
          )}
        </div>
        <Card.Img variant="top" src={item.details.image} />
        <Container fluid className="text-center">
          <Row className="pt-2 productname-font pb-0 mb-0">
            <Col>{item.name}</Col>
            <div className="card-seperator py-0 my-0">_______</div>
          </Row>
          <Row>
            <Col>
              $ <span className="card-price-font me-0">{pricearr[0]}</span>{" "}
              <span className="card-price-font_cents ms-0">.{pricearr[1]}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="card-priceor-font">or 5 *</span>
              <span className="card-priceor-font-bold">$ 5.89</span>
            </Col>
          </Row>
          <Row className="py-2">
            <Col>
              <Card.Link
                onClick={() => addToCart(item)}
                className="btn btn-sm btn-dark"
                href="#"
              >
                Add to Card
              </Card.Link>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

export default Productcard;
