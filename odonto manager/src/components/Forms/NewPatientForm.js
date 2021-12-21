import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";



const NewPatientForm = () => {
  const [gender, setGender] = React.useState("");
  const [date, setDate] = React.useState();
  const [minor, setMinor] = React.useState()

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleDate = (newDate) => {
    setDate(newDate);
  };

  const handleMinor = (ans) => {
    setMinor(ans)
  }
  

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "40%" },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Add New Patient</h2>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="BirthDate"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Is the patient Minor?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={minor}
          label="Is the patient Minor?"
          onChange={handleMinor}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="Guardian's full name" variant="outlined" />
      <TextField id="outlined-basic" label="Guardian's Address" variant="outlined" />
      <TextField id="outlined-basic" label="Ailments" variant="outlined" />

    </Box>
  );
};

export default NewPatientForm;
