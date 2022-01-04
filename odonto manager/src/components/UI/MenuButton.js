import React, {useState} from "react";
import axios from 'axios';
import { Fab, Grid } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import ModalContainer from "../UI/ModalContainer";

const MenuButton = (props) => {
  const [open, setOpen] = useState(false);
  const [editOn, setEdit] = useState(false)

  const handleOpen = () => {
    setEdit(false)
    setOpen(true)
  console.log(editOn)
};
  const handleClose = () => {
    setOpen(false) 
  };

  const editMode = () => {
    setEdit(true)
    setOpen(true)
    console.log(editOn)
    }

  const deleteHandler = () => {
    try{
      axios.delete(`https://us-central1-odontomanager-95368.cloudfunctions.net/app/api/${props.section}/${props.selectedId}`)
      console.log(`User has been delete ${props.selectedId}`)
    } catch(e){
      console.log("Error: ", e);
    }
  }

  return (
    <>
      <div>
        <ModalContainer
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          {props.formLoad}
        </ModalContainer>
        <Grid style={{ position: "relative", float: "right", bottom: "2%" }}>
          <Fab color="primary" aria-label="Add" onClick={handleOpen}>
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="Edit" onClick={editMode}>
            <EditIcon />
          </Fab>
          <Fab color="secondary" aria-label="Delete" onClick={deleteHandler}>
            <DeleteIcon />
          </Fab>
        </Grid>
      </div>
    </>
  );
};

export default MenuButton;
