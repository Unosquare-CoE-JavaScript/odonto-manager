import React, {useState} from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import MenuButton from "../UI/MenuButton"

const TableTemplate = (props) => {

  const [selectedID, setSelectedID] = useState(null);

  const selectedIDHandler = (idSelected) => {
    props.onSaveId(idSelected)
    setSelectedID(idSelected)
  }

  return (
    <>
     
      <div style={{width: "90%", margin: "auto"}}>
      <TableContainer component={Paper}>
        <Table  sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="right"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id} selected={selectedID === row.id}>
                    {props.columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="right" onClick={() => selectedIDHandler(row.id)}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </>
  );
};

export default TableTemplate;
