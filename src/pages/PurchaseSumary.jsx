import React from "react";
import { Box, Grid, Typography, Button, Card } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TicketSum from "../components/TicketSum";

const PurchaseSummary = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f0648", // Fondo morado principal
        minHeight: "auto",
        width: "100%",
        padding: 3,
        borderRadius: "8px",
      }}
    >
      {/* Sección de Información del Viaje */}
      <Box
        sx={{
          backgroundColor: "#1f0648",

          margin: "auto",
          width: "100%",
          mb: 4,
          p: 2,
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Izquierda: detalles del viaje */}
          <Grid item xs={8}>
            <Typography variant="h6" sx={{ color: "white", textAlign: "left" }}>
              México{" "}
              <CompareArrowsIcon
                sx={{ verticalAlign: "middle", mx: 1, color: "white" }}
              />{" "}
              Japón
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", textAlign: "left" }}
            >
              Redondo • Económica • 2 pasajeros
            </Typography>
          </Grid>

          {/* Derecha: precio y botón */}
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              $1500
            </Typography>
            <Button variant="contained" sx={{ mt: 1, borderRadius: "8px" }}>
              Siguiente paso
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Sección Detalle del Pasajero */}
      <Box sx={{ width: "100%", margin: "auto", mb: 4 }}>
        <Typography variant="h6" sx={{ color: "white", textAlign: "left" }}>
          Detalle del pasajero
        </Typography>
        {/* Agrega más contenido si es necesario */}
      </Box>

      {/* Card con formulario */}
      <Card
        sx={{
          // Se quita el borde (si lo deseas) para cumplir "no le pongas borde"
          border: "1px solid white",
          borderRadius: "8px",
          background: "#1f0648",
          padding: 0.5,
          width: "100%",
          margin: "auto",
          mb: 4,
        }}
      >
        <Box sx={{ width: "100%", margin: "auto", mb: 5,  p: 3}}>
          <Typography variant="h6" sx={{ color: "white", textAlign: "left" }}>
            Viaje Redondo - clase Economica
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "white", textAlign: "left",  mb: 2}}
          >
            2 pasajeros
          </Typography>

          <TicketSum />
        </Box>
      </Card>
    </Box>
  );
};

export default PurchaseSummary;
