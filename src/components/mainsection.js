import React, { useState, useEffect, useContext } from "react";
import { Spinner, Container, Row, Col, Stack } from "react-bootstrap";
import axios from "axios";
import MainSectionCardList from "./mainsectioncardlist";
import { AppContext } from "../context/AppContext";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../states/index";
import TopNavigation from "./topnav";

const apiurl =
  "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments";

function Mainsection() {
  const { setData, data, setFiltereddata } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(apiurl)
      .then((response) => {
        let list = [...response.data];
        setData(list);
        setFiltereddata(list);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <MySpinner />;
  } else {
    return (
      <>
        <MainSectionCardList></MainSectionCardList>
      </>
    );
  }
}

export default Mainsection;

export function MySpinner() {
  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div>
          <h6>Loading ....</h6>
        </div>
        <div>
          <Spinner animation="grow" />
        </div>
      </Stack>
    </>
  );
}
