import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Importar autenticación

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          SkyFare
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button sx={{ fontWeight: "bold" }} onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            sx={{ fontWeight: "bold" }}
            onClick={() => navigate("/book-flight")}
          >
            Book a Flight
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={handleMenuOpen}>
            <AccountCircle sx={{ color: "#1f0648" }} />
          </IconButton>
          <Typography
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={handleMenuOpen}
          >
            {user ? `${user.nombre} ${user.apellido}` : "Usuario"}
          </Typography>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
