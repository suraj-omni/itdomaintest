import React, { useState } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Button,
  Row,
  Col,
  Stack,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import MiniCart from "./minicart";

function TopNavigation() {
  const { cart } = useSelector((state) => state);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Navbar bg="white" expand={false} sticky="top">
          <Container fluid>
            <div className="bg-black text-white ms-auto me-2">
              <Button variant="dark" onClick={handleShow}>
                <FontAwesomeIcon icon={faCartShopping} />
                <div className="cart-text">{cart.length}</div>
              </Button>
            </div>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className="bg-black text-white"
            >
              <Offcanvas.Header
                closeButton
                closeVariant="white"
              ></Offcanvas.Header>
              <Stack
                direction="horizontal"
                className="text-white mx-auto"
                gap={3}
              >
                <Row>
                  <Col>
                    <div>
                      <FontAwesomeIcon icon={faCartShopping} size="2x" />
                    </div>
                    <div className="poduct-count-circle"> {cart.length}</div>
                  </Col>
                  <Col>
                    <h3>Bag</h3>
                  </Col>
                </Row>
              </Stack>
              <Offcanvas.Body>
                <MiniCart></MiniCart>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default TopNavigation;
