import React, { useEffect, useState } from "react";
import { Stack, Button, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

function MiniCart() {
  const { cart } = useSelector((state) => state);
  const [list, setList] = useState([]);
  const [subtotal, setSubtotal] = useState([]);
  useEffect(() => {
    var pcl = [];
    var subtot = 0;
    cart.map((d, index) => {
      //console.log(d);
      subtot = subtot + d.details.price;
      pcl.push(
        <Stack
          direction="horizontal"
          className="bg-black text-white border p-1"
          gap={3}
          key={d.id}
        >
          <div className="bg-light border">
            <Image src={d.details.image} className="" width="90px" />
          </div>
          <div>{d.name}</div>
          <div className="minicart-price">${d.details.price}</div>
        </Stack>
      );
    });
    setList(pcl);
    setSubtotal(subtot);
  }, [cart]);

  return (
    <>
      <Stack gap={3}>{list}</Stack>
      <Stack direction="horizontal" className="bg-black text-white p-1" gap={1}>
        <div className="flex mx-auto p-2">
          Sub Total is :- <span className="minicart-price">$ {subtotal}</span>{" "}
        </div>
      </Stack>
      <Stack direction="horizontal" className="bg-black text-white p-1" gap={1}>
        <div className="flex mx-auto p-2">
          <Button variant="dark">Check out</Button>
        </div>
      </Stack>
    </>
  );
}

export default MiniCart;
