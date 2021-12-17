import React from "react";
import Layout from "../Layout/Layout";

import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "lastname", label: "Last Name", minWidth: 100 },
  {
    id: "treatment",
    label: "Treatment",
    minWidth: 170,
    align: "right",
  },
  {
    id: "payment",
    label: "Payment",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, lastname, treatment, payment) {
  return { name, lastname, treatment, payment };
}

// Dummy Data
const rows = [
  createData("India", "IN", "Orthodontics", 3287263),
  createData("China", "CN", "Orthodontics", 9596961),
  createData("Italy", "IT", "Orthodontics", 301340),
  createData("United States", "US", "Orthodontics", 9833520),
  createData("Canada", "CA", "Orthodontics", 9984670),
  createData("Australia", "AU", "Orthodontics", 7692024),
  createData("Germany", "DE", "Orthodontics", 357578),
  createData("Ireland", "IE", "Orthodontics", 70273),
  createData("Mexico", "MX", "Orthodontics", 1972550),
  createData("Japan", "JP", "Orthodontics", 377973),
  createData("France", "FR", "Orthodontics", 640679),
  createData("United Kingdom", "GB", "Orthodontics", 242495),
  createData("Russia", "RU", "Orthodontics", 17098246),
  createData("Nigeria", "NG", "Orthodontics", 923768),
  createData("Brazil", "BR", "Orthodontics", 8515767),
];

const Stocks = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Layout />
      <div style={{ height: 100 }}></div>
      <Paper
        sx={{
          p: 3,
          margin: "auto",
          maxWidth: 900,
          height: "600 vh",
          flexGrow: 2,
          borderRadius: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Typography gutterBottom variant="h4" component="div">
              Stock
            </Typography>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
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
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Stocks;
