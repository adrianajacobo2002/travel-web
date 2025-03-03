import React from "react";
import { Box, TextField, MenuItem, Typography } from "@mui/material";
import "./style.css";

const PassengerForm = () => {
  return (
    <Box className="passenger-form">
      {/* Título */}
      <Typography className="form-title" fontWeight="bold" variant="h6">Pasajero 1</Typography>

      {/* Campos de nombre */}
      <Box className="input-row">
        <TextField label="Nombre" variant="outlined" className="input-field" />
        <TextField label="Segundo Nombre" variant="outlined" className="input-field" />
        <TextField label="Apellido(s)" variant="outlined" className="input-field" />
      </Box>

      {/* Título de fecha de nacimiento */}
      <Typography className="form-subtitle" >Fecha de nacimiento</Typography>

      {/* Campos de fecha de nacimiento */}
      <Box className="input-row">
        <TextField label="Mes" variant="outlined" className="input-small"/>
        <TextField label="Día" variant="outlined" className="input-small" />
        <TextField label="Año" variant="outlined" className="input-small" />
        <TextField select label="Género" variant="outlined" className="input-field">
          <MenuItem value="male">Masculino</MenuItem>
          <MenuItem value="female">Femenino</MenuItem>
          <MenuItem value="other">Otro</MenuItem>
        </TextField>
        <TextField select label="País/ región de residencia" variant="outlined" className="input-field">
          <MenuItem value="mx">México</MenuItem>
          <MenuItem value="us">Estados Unidos</MenuItem>
          <MenuItem value="es">España</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};

export default PassengerForm;
