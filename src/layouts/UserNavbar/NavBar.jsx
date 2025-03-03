import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Simula obtener el usuario logueado (reemplazar con datos reales)
  useEffect(() => {
    // Aquí puedes obtener el usuario de un contexto o API
    setUser({ name: "Bartolomé Perez" }); // Simulación de usuario logueado
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "white", // Navbar blanca
        width: "100vw",
        top: 0,
        left: 0,
        color: "#1f0648", // Texto morado
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
        {/* Nombre del Proyecto */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#1f0648", // Morado
            cursor: "pointer",
          }}
          onClick={() => navigate("/home")}
        >
          Sky<span style={{ fontWeight: "900" }}>Fare</span>
        </Typography>

        {/* Sección Central - Botones */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            sx={{ fontWeight: "bold", color: "#1f0648" }}
            onClick={() => navigate("/home")}
          >
            Home
          </Button>
          <Button
            sx={{ fontWeight: "bold", color: "#1f0648" }}
            onClick={() => navigate("/book-flight")}
          >
            Book a Flight
          </Button>
        </Box>

        {/* Sección Derecha - Usuario */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={{ color: "#1f0648" }}>
            <AccountCircle />
          </IconButton>
          <Typography sx={{ fontWeight: "bold", color: "#1f0648" }}>
            {user ? user.name : "Usuario"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
