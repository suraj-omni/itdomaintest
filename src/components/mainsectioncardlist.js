import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import ProductCard from "./productcard";
import { AppContext } from "../context/AppContext";

function MainSectionCardList() {
  const { productCardList, setProductCardList, filtereddata } =
    useContext(AppContext);

  useEffect(() => {
    let pcl = [];
    filtereddata.map((d, index) => {
      pcl.push(
        <Col key={d.id}>
          <ProductCard key={d.id} item={d} />
        </Col>
      );
    });
    setProductCardList(pcl);
  }, [filtereddata]);

  if (productCardList.length === 0)
    return (
      <>
        <Stack direction="horizontal" className="bg-black border p-2">
          <div
            className="text-white justify-content-center mx-auto"
            width="100%"
          >
            <h6>Sorry, No products to show.</h6>
          </div>
        </Stack>
      </>
    );
  else {
    return (
      <>
        <Container>
          <Row>
            <Col className="noofproducts">
              {productCardList.length} Product(s) found.
            </Col>
            <Col></Col>
          </Row>
          <Row>{productCardList}</Row>
        </Container>
      </>
    );
  }
}

export default MainSectionCardList;
