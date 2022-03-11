import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./itdomainshopping.css";
import FilterSection from "./components/filtersection";
import Mainsection from "./components/mainsection";
import { AppContext } from "./context/AppContext";
import TopNavigation from "./components/topnav";

function App() {
  const [data, setData] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);
  const [productCardList, setProductCardList] = useState([]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        filtereddata,
        setFiltereddata,
        productCardList,
        setProductCardList,
      }}
    >
      <>
        <Row className="m-0 p-0">
          <Col xs={12} className="m-0 p-0">
            <TopNavigation></TopNavigation>
          </Col>
        </Row>
        <Container fluid="lg" className="m-6">
          <Row className="flex-row">
            <Col xs={12} md={3} className="mt-md-4 mt-xs-3">
              <FilterSection />
            </Col>
            <Col xs={12} md={9} className="mt-md-4 mt-xs-3">
              <Mainsection />
            </Col>
          </Row>
        </Container>
      </>
    </AppContext.Provider>
  );
}

export default App;
