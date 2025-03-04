import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const UnRegisterNavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#1f0648",
        width: "100vw",
        top: 0,
        left: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Sección Izquierda */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            color="inherit"
            sx={{ fontWeight: "bold" }}
            onClick={() => navigate("/")}
          >
            HOME
          </Button>
          <Button
            color="inherit"
            sx={{ fontWeight: "bold" }}
            onClick={() => navigate("/book-flight")}
          >
            BOOK A FLIGHT
          </Button>
        </Box>

        {/* Sección Derecha */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            minWidth: "200px", // Asegura que haya suficiente espacio
          }}
        >
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <Button
            color="inherit"
            sx={{ fontWeight: "bold" }}
            onClick={() => navigate("/register")}
          >
            SIGN UP
          </Button>

          <Button
            color="inherit"
            sx={{ fontWeight: "bold" }}
            onClick={() => navigate("/login")}
          >
            LOG IN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UnRegisterNavBar;