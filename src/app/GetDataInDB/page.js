// "use client";

import SelectItems from "../components/SelectItems";

const AddProduct = async () => {
  let data = await fetch("http://localhost:3000/api/db-product");
  data = await data.json();
  if (data.success) {
    console.log("get data");

    return data.result;
  } else {
    return false;
  }
};

const GetDataInDB = async () => {
  let emp = await AddProduct();
  console.log("inside", emp);

  return (
    <>
      <div>
        <h1>Item List</h1>
        <table border={2}>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Price</th>
              <th>Weight</th>
              <th>Select Item</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.weight}</td>
                {/* <SelectItems
                  name={item.name}
                  price={item.price}
                  weight={item.weight}
                /> */}
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button>Place Order</button>
      </div>
    </>
  );
};

export default GetDataInDB;
