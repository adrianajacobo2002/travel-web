import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ShoppingBag , Close, AttachMoney, Luggage, Backpack, Hail } from "@mui/icons-material";
import "./style.css"; 

const FlightPlanCard = () => {
  return (
    <Box className="flight-card">
      {/* Título */}
      <Typography className="flight-title" fontSize="30px" >estándar</Typography>
      <Typography className="flight-subtitle">Más completo</Typography>

      {/* Precio */}
      <Typography className="flight-price">
        USD <span className="flight-price-bold">1,590</span>
      </Typography>

      {/* Beneficios */}
      <Box className="flight-benefits">
        <Box className="flight-benefit">
          <ShoppingBag className="icon" />
          <Typography className="text-link">1 artículo personal (bolso)</Typography>
        </Box>
        <Box className="flight-benefit">
          <Backpack className="icon" />
          <Typography className="text-link">1 equipaje de mano (10 kg)</Typography>
        </Box>
        <Box className="flight-benefit">
          <Luggage className="icon" />
          <Typography className="text-link">Equipaje de bodega (23kg)</Typography>
        </Box>
        <Box className="flight-benefit">
          <Hail className="icon" />
          <Typography className="text-link">Check-in en aeropuerto</Typography>
        </Box>
        <Box className="flight-benefit disabled">
          <AttachMoney className="icon" />
          <Typography className="text-disabled">Menú a bordo</Typography>
        </Box>
        <Box className="flight-benefit disabled">
          <AttachMoney className="icon" />
          <Typography className="text-disabled">Cambios (antes del vuelo)</Typography>
        </Box>
        <Box className="flight-benefit">
          <Close className="icon" />
          <Typography className="text-link">Reembolso</Typography>
        </Box>
      </Box>

      {/* Botón de selección */}
      <Button className="flight-button">Seleccionar</Button>
    </Box>
  );
};

export default FlightPlanCard;
