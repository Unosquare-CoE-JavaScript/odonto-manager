import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Drawer,
  Paper,
  Divider,
  Container,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@material-ui/icons";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { useState } from "react";
import LogoutButton from "../UI/LogoutButton";
import logo from "../assets/logo.png";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "#1FBDC8" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="logo"
            style={{
              marginLeft: "20px",
              height: 50,
              borderRadius: 8,
              border: "3px solid white",
            }}
          ></img>
          <Typography style={{ flexGrow: 1 }}></Typography>

          <LogoutButton>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="/login"
            ></Link>
          </LogoutButton>
        </Toolbar>
      </AppBar>

      {/* Menu */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Paper
          style={{
            width: 240,
            height: 73,
            backgroundColor: "#39C1CB",
            borderRadius: 0,
          }}
          elevation={0}
        >
          <div
            style={{
              padding: 15,
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              style={{ color: "white" }}
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logo}
              alt="logo"
              style={{
                marginLeft: "20px",
                height: 50,
                borderRadius: 8,
                border: "3px solid white",
              }}
            ></img>
          </div>
        </Paper>
        <Divider />
        {/* module Shortcuts */}
        <ul style={{ listStyleType: "none", margin: 10 }}>
          <li>
            <Button
              style={{
                borderRadius: 50,
                backgroundColor: "#8C51FF",

                marginTop: 10,
                color: "white",
              }}
              onClick={() => setOpen(false)}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/Dashboard"
              >
                Agenda
              </Link>
            </Button>
          </li>
          <li>
            <Button
              style={{
                borderRadius: 50,
                backgroundColor: "#8C51FF",
                marginTop: 10,
                color: "white",
              }}
              onClick={() => setOpen(false)}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/Patiens"
              >
                Patients
              </Link>
            </Button>
          </li>
          <li>
            <Button
              style={{
                borderRadius: 50,
                backgroundColor: "#8C51FF",
                marginTop: 10,
                color: "white",
              }}
              onClick={() => setOpen(false)}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/Records"
              >
                Medical Records
              </Link>
            </Button>
          </li>
          <li>
            <Button
              style={{
                borderRadius: 50,
                backgroundColor: "#8C51FF",
                marginTop: 10,
                color: "white",
              }}
              onClick={() => setOpen(false)}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/Payments"
              >
                Payments
              </Link>
            </Button>
          </li>
          <li>
            <Button
              style={{
                borderRadius: 50,
                backgroundColor: "#8C51FF",
                marginTop: 10,
                color: "white",
              }}
              onClick={() => setOpen(false)}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/Stocks"
              >
                Stock
              </Link>
            </Button>
          </li>
        </ul>
        <Divider />
        <ul style={{ listStyleType: "none" }}>
          <footer style={{ bottom: 80, position: "fixed", width: "100%" }}>
            <Button
              style={{ borderRadius: 50, backgroundColor: "#1FBDC8" }}
              variant="contained"
              onClick={() => setOpen(false)}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Profile"
              >
                User
              </Link>
            </Button>
          </footer>
        </ul>
      </Drawer>

      {/* footer */}
      <footer style={{ bottom: 0, position: "fixed", width: "100%" }}>
        <Container>
          <Typography align="center">
            {" "}
            Unosquare ®️ {new Date().getFullYear()}
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
