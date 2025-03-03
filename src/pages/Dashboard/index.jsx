import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromToken } from "../../utils/auth"; // Importa la función corregida
import { Container, Button, Typography, Box } from "@mui/material";

const Dashboard = () => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const id = getUserFromToken();
    console.log("ID del usuario en Dashboard:", id); // 👈 LOG para depuración
    if (!id) {
      navigate("/login"); // Si no hay ID, redirigir a login
    } else {
      setUserId(id);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    navigate("/login"); // Redirige al login
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Box sx={{ backgroundColor: "#fff", padding: 4, borderRadius: 5, boxShadow: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1f0648" }}>
          Dashboard
        </Typography>
        {userId !== null ? (
          <>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Tu ID: {userId}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, backgroundColor: "#1f0648", "&:hover": { backgroundColor: "#150336" } }}
              onClick={handleLogout}
            >
              Cerrar Sesión
            </Button>
          </>
        ) : (
          <Typography>Cargando...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
