import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function FilterSection() {
  const { data, setFiltereddata } = useContext(AppContext);
  function filter(e) {
    let action = e.target.name;
    setFiltereddata([]);
    switch (action) {
      case "xsmall": {
        let fd = data.filter((item) => item.details.size === "xsmall");
        setFiltereddata(fd);
        break;
      }
      case "small": {
        let fd = data.filter((item) => item.details.size === "small");
        setFiltereddata(fd);
        break;
      }
      case "large": {
        let fd = data.filter((item) => item.details.size === "large");
        setFiltereddata(fd);
        break;
      }
      case "all": {
        setFiltereddata(data);
        break;
      }
      default: {
        setFiltereddata([]);
        break;
      }
    }
  }

  return (
    <>
      <div id="filtersection" className="row filertable">
        <h6 className="sizes-font ">Sizes:</h6>
        <ul>
          <li>
            <a onClick={filter} name="xsmall" className="badge rounded-circle">
              XS
            </a>
          </li>
          <li>
            <a onClick={filter} name="small" className="badge rounded-circle">
              S
            </a>
          </li>
          <li>
            <a onClick={filter} name="mlarge" className="badge rounded-circle">
              ML
            </a>
          </li>
          <li>
            <a onClick={filter} name="large" className="badge rounded-circle">
              L
            </a>
          </li>
          <li>
            <a onClick={filter} name="xlarge" className="badge rounded-circle">
              XL
            </a>
          </li>
          <li>
            <a onClick={filter} name="xxlarge" className="badge rounded-circle">
              XXL
            </a>
          </li>
          <li>
            <a onClick={filter} name="all" className="badge rounded-circle">
              ALL
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FilterSection;
