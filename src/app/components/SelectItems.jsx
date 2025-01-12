"use client";

import { useState } from "react";

const SelectItems = ({ name, price, weight }) => {
  const [extData, setExtData] = useState();
  const setOrderData = (a, b, c) => {
    setExtData(a);
  };
  console.log(setOrderData);

  return (
    <>
      <div>
        <td onClick={setOrderData(name, price, weight)}>
          <input type="checkbox" />
        </td>
      </div>
    </>
  );
};

export default SelectItems;
