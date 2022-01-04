import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import Layout from "../Layout/Layout";
import TableTemplate from "../Layout/Table";
import NewPatientForm from "../Forms/NewPatientForm";
import MenuButton from "../UI/MenuButton";

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
  const [selectedPatient, setSelectedPatient] = useState("")

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/patients"
      );
      const transformedData = response.data.map((patient) => {
        return { id: patient.id, ...patient.patient_data.patient };
      });
      setPatients(transformedData);
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);


  const savePatientID = useCallback((selectedPatient) => {
    setSelectedPatient(selectedPatient)
  }, [])


  useEffect(() => {
    fetchData();
    savePatientID()
  }, [fetchData, savePatientID]);

  return (
    <>
      <Layout>
      <MenuButton formLoad={<NewPatientForm patientEditID={selectedPatient}/>} section="patients"selectedId={selectedPatient} reload={fetchData()}/>
      <TableTemplate
        columns={columns}
        rows={patients}
        onSaveId={savePatientID}
      />
      </Layout>
    </>
  );
};

export default Patients;
