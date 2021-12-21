import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Layout from "../Layout/Layout";
import TableTemplate from "../Layout/Table";
import ModalWindow from "../UI/ModalContainer";
import NewPatientForm from "../Forms/NewPatientForm";

const columns = [
  { id: "names", label: "Name" },
  { id: "lastname", label: "Last Name" },
  { id: "birthdate", label: "Birthday" },
  { id: "gender", label: "Gender" },
  { id: "phonenumber", label: "Phone number" },
  { id: "address", label: "Address" },
  { id: "minor", label: "Minor" },
  { id: "guardianfullname", label: "Guardian's full name" },
  { id: "guardianaddress", label: "Guardian's Address" },
  { id: "ailments", label: "Ailments" },
];

const Patients = () => {
  const [patients, setPatients] = useState([]);

  const openModal = (modalState) => {
    const actionState = modalState;
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/patients"
      );
      const transformedData = response.data.map((patient) => {
        return { id: patient.id, ...patient.patient_data };
      });
      setPatients(transformedData);
      console.log(transformedData);
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Layout />
      <div style={{ height: 100 }}></div>
      <TableTemplate columns={columns} rows={patients} formLoad={<NewPatientForm/>} />
    </>
  );
};

export default Patients;
