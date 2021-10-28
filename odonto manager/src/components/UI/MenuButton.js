import { Fab, Grid } from "@material-ui/core";
import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const MenuButton = () => {
  return (
    <>
      <div>
        <Grid style={{ position: "absolute", bottom: 16, right: 16 }}>
          <Fab color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="Edit">
            <EditIcon />
          </Fab>
        </Grid>
      </div>
    </>
  );
};

export default MenuButton;
