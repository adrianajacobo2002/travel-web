import React from "react";
import { Box, Typography, Button } from "@mui/material";
import avion from "../assets/img/avion.png";

export default function TicketSum() {
  return (
    <Box
      id="ticketSumContainer"
      name="ticketSumContainer"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gap: "8px",
        p: 1,
      }}
    >
      {/* Ícono de la empresa (lado izquierdo) */}
      <Box
        id="companyIconContainer"
        name="companyIconContainer"
        sx={{
          gridRow: "span 2 / span 2",
          gridColumnStart: 1,
          gridRowStart: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Ajuste de tamaño con Box component="img" */}
        <Box
          component="img"
          src={avion}
          alt="Icono empresa"
          sx={{ width: "40px", height: "40px" }}
        />
      </Box>

      {/* Información del vuelo (centro) */}
      <Box
  id="flightInfoContainer"
  name="flightInfoContainer"
  sx={{
    gridColumn: "span 3 / span 3",
    gridRow: "span 2 / span 2",
    gridColumnStart: 2,
    gridRowStart: 1,
    display: "flex",
    flexDirection: "column",
    // "left" no es válido. Usa "flex-start"
    justifyContent: "flex-start",
    // si quieres que los items se peguen a la izquierda en el eje secundario:
    alignItems: "flex-start",
  }}
>
  <Typography
    id="flightRoute"
    name="flightRoute"
    variant="h6"
    color="#fff"
    textAlign="left"
  >
    San Salvador (SAL) to Los Angeles (LAX)
  </Typography>
  <Typography
    id="flightDateTime"
    name="flightDateTime"
    variant="body1"
    color="#fff"
    textAlign="left"
  >
    14 de junio de 2025 • 6:40 PM - 11:20 PM (5h 40min)
  </Typography>
  <Typography
    id="flightSeats"
    name="flightSeats"
    variant="body1"
    color="#fff"
    textAlign="left"
  >
    Asientos B1, C1
  </Typography>
</Box>


      {/* Botón con el plan elegido (lado derecho) */}
      <Box
        id="planButtonContainer"
        name="planButtonContainer"
        sx={{
          gridRow: "span 2 / span 2",
          gridColumnStart: 5,
          gridRowStart: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pr: 1,
        }}
      >
        <Button
          id="planButton"
          name="planButton"
          variant="contained"
          sx={{
            borderRadius: "50px",
            backgroundColor: "#ff9800",
          }}
        >
          Básico
        </Button>
      </Box>
    </Box>
  );
}