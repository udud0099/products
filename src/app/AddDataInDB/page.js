"use client";

import { useState } from "react";

const AddDataInDB = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");

  const AddProduct = async () => {
    let data = await fetch("http://localhost:3000/api/db-product", {
      method: "POST",
      body: JSON.stringify({ name, price, weight }),
    });
    data = await data.json();
    if (data.success) {
      alert("ok data add");
      setName("");
      setPrice("");
      setWeight("");
    } else {
      alert("try again");
    }
  };
  return (
    <>
      <div>
        <h4>
          {name} {price} {weight}
        </h4>
        <h1>Add Product</h1>
        <div>
          <label htmlFor="name">Item Name </label>
          <input
            id="name"
            type="text"
            placeholder="Add Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <hr />
          <label htmlFor="price">price </label>
          <input
            id="price"
            type="text"
            placeholder="Add Item Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <hr />
          <label htmlFor="weight">weight </label>
          <input
            id="weight"
            type="text"
            placeholder="Add Item weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <hr />
          <button onClick={AddProduct}>Add Product</button>
        </div>
      </div>
    </>
  );
};

export default AddDataInDB;
