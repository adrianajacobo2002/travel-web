import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./style.css";

const Ticket = () => {
  return (
    <Box className="ticket-wrapper">
      <Box className="ticket-container">
        {/* Cortes del ticket */}
        <Box className="ticket-cut-left" />
        <Box className="ticket-cut-right" />

        {/* Línea punteada */}
        <Box className="dotted-line" />

        {/* Sección de salida */}
        <Box className="ticket-section-left">
          <Typography variant="h7"  className="highlight-text">
            Vuelo sin escalas
          </Typography>
          <Typography variant="body2" marginTop="10px" className="gray-text">
            San Salvador (SAL)
          </Typography>
          <Typography className="celeste-text bold">6:40 PM</Typography>
          <Typography variant="caption" className="gray-text">
            14 Junio, 2025
          </Typography>
        </Box>

        {/* Sección de duración */}
        <Box className="ticket-section center">
          <Box className="top-line"></Box>
          <Typography variant="body2" className="celeste-text">
            5 h 40 min
          </Typography>
        </Box>

        {/* Sección de llegada */}
        <Box className="ticket-section-right">
          <Typography variant="body2" className="gray-text">
            Los Ángeles (LAX)
          </Typography>
          <Typography className="celeste-text bold">11:20 PM</Typography>
          <Typography variant="caption" className="gray-text">
            14 Junio, 2025
          </Typography>
        </Box>

        {/* Sección del precio */}
        <Box className="ticket-section price-section">
          <img
            src="src/assets/img/avianca.png"
            alt="Airline Logo"
            className="airline-logo"
          />
          <Typography className="price-text">$1,500</Typography>
          <Button
            variant="contained"
            sx={{
              mt: 1,
              borderRadius: "9px",
              backgroundColor: "var(--azul)",
              fontSize: "9px",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
          >
            Detalles
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Ticket;
