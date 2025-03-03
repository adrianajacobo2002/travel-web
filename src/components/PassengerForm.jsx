import React from "react";
import { TextField, MenuItem, Card, CardContent, Typography, Grid } from "@mui/material";

const PassengerForm = () => {
  return (
    <Card sx={{ backgroundColor: "#1f0648", borderRadius: 3, padding: 2, color: "white" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Pasajero 1
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField fullWidth label="Nombre" variant="outlined" InputLabelProps={{ style: { color: "#1f0648" } }} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Segundo Nombre" variant="outlined" InputLabelProps={{ style: { color: "#1f0648" } }} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Apellido(s)" variant="outlined" InputLabelProps={{ style: { color: "#1f0648" } }} />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth label="Mes" variant="outlined" InputLabelProps={{ style: { color: "#1f0648" } }} />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth label="Día" variant="outlined" InputLabelProps={{ style: { color: "#1f0648" } }} />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth label="Año" variant="outlined" InputLabelProps={{ style: { color: "#1f0648" } }} />
          </Grid>
          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              label="Género"
              variant="outlined"
              InputLabelProps={{ style: { color: "#1f0648" } }}
            >
              <MenuItem value="M">Masculino</MenuItem>
              <MenuItem value="F">Femenino</MenuItem>
              <MenuItem value="O">Otro</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              select
              fullWidth
              label="País/ región de residencia"
              variant="outlined"
              InputLabelProps={{ style: { color: "#1f0648" } }}
            >
              <MenuItem value="mx">México</MenuItem>
              <MenuItem value="us">Estados Unidos</MenuItem>
              <MenuItem value="es">España</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PassengerForm;
