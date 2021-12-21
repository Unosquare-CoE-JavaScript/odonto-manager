import React, { useEffect, useState } from "react";

import axios from "axios";
import Layout from "../Layout/Layout";
import TableTemplate from "../Layout/Table";

const columns = [
  { id: "id", label: "ID" },
  { id: "dateentry", label: "Procedures date" },
  { id: "initialdiagnosis", label: "Initial diagnosis" },
  { id: "newitemsused", label: "Items used for the procedure" },
  { id: "nextprocedure", label: "Next procedure" },
  { id: "patientsid", label: "Patients ID" },
  { id: "procedureperformed", label: "Performed procedure" }
]


const Records = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    axios
      .get(
        "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/medical_records"
      )
      .then((response) => {
        const transformedData = response.data.map((record) => {
          return { id: record.id, ...record.patient_data };
        });
        setRecord(transformedData);
      });
  }

  return (
    <>
      <Layout />
      <TableTemplate columns={columns} rows={record} />
    </>
  );
};

export default Records;
