import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Layout from "../Layout/Layout";
import TableTemplate from "../Layout/Table";

const columns = [
  { id: "id", label: "ID" },
  { id: "quantity", label: "Quantity" },
  { id: "expirationdate", label: "Expiration Date" },
  { id: "suppliersname", label: "Supplier" },
  { id: "itemdescription", label: "Description" },
];


const Stocks = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(
        "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/stock"
      )
      .then((response) => {
        const transformedData = response.data.map((item) => {
          return { id: item.id, ...item.item_data };
        });
        setItems(transformedData);
      });
  }

  return (
    <>
      <Layout />
      <div style={{ height: 100 }}></div>
      <TableTemplate columns={columns} rows={items} />

    </>
  );
};

export default Stocks;
