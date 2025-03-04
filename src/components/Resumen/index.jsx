
import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import "./style.css";

const FlightInfo = () => {
  return (
    <Box className="flight-info">
      {/* Logo de la aerolínea */}
      <img src="src/assets/img/avianca.png" alt="Airline Logo" className="airline-logo" />

      {/* Información del vuelo */}
      <Box className="flight-details">
        <Box className="flight-header">
          <Typography className="flight-route" variant="h6" fontWeight="bold">
            San Salvador <b>(SAL)</b> to Los Angeles <b>(LAX)</b>
          </Typography>
          <Chip label="básico" className="flight-tag" variant="body" />
        </Box>

        <Typography className="flight-date" variant="body">
          <b>14 de junio 2025</b> &nbsp; 6:40 PM - 11:20 PM (5 h 40 min)
        </Typography>

        <Typography className="flight-seats" variant="body">
          Asientos <b>B1, C1</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default FlightInfo;