import * as React from "react";
import Layout from "./Layout";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DashboardTable from "./DashboardTable";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <>
      <Layout>
      
      <Box mr={2} ml = {2} sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} rowSpacing={2}>
        <Grid item xs= {4}>
          <Item>
            <Typography variant="h5">
            Appointments of the Day
            </Typography>
            <Typography variant="h1">
              5
            </Typography>
            </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
          <Typography variant="h5">
            Pending Payments
            </Typography>
            <Typography variant="h1">
              2
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
          <Typography variant="h5">
            Inventory status
            </Typography>
            
            <Typography><DoneAllIcon color="success" sx={{ fontSize: 85 }}/></Typography>
            <Typography variant="subtitle.1">
              Status: OK
            </Typography>
          </Item>
        </Grid>

        <Grid item xs= {8}>
          <Item sx={{height: "300%"}}>
            <Typography variant="h5">
              Today's procedures
            </Typography>
            <DashboardTable/>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item sx={{height: "300%"}}>
          <Typography variant="h5">
              Today's Agenda
            </Typography>
            <DashboardTable/>
          </Item>
        </Grid>

      </Grid>
    </Box>
    </Layout> 
    </>
  );
}
