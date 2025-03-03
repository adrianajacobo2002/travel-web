import React, { useState } from "react";
import { TextField, MenuItem, Card, CardContent, Typography, Grid, Box, FormControl, InputLabel, Select } from "@mui/material";

const PassengerForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    segundoNombre: "",
    apellido: "",
    mes: "",
    dia: "",
    anio: "",
    genero: "",
    residencia: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <Card
        sx={{
          backgroundColor: "#1f0648",
          borderRadius: 3,
          padding: 4,
          color: "white",
          border: "1px solid white",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
            Pasajero 1
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField fullWidth label="Nombre" name="nombre" variant="outlined"
                value={formData.nombre} onChange={handleChange}
                InputLabelProps={{ style: { color: "#1f0648" } }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Segundo Nombre" name="segundoNombre" variant="outlined"
                value={formData.segundoNombre} onChange={handleChange}
                InputLabelProps={{ style: { color: "#1f0648" } }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Apellido(s)" name="apellido" variant="outlined"
                value={formData.apellido} onChange={handleChange}
                InputLabelProps={{ style: { color: "#1f0648" } }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom sx={{ marginTop: 3, textAlign: "left" }}>
            Fecha de nacimiento
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={2}>
              <TextField fullWidth label="Mes" name="mes" variant="outlined"
                value={formData.mes} onChange={handleChange}
                InputLabelProps={{ style: { color: "#1f0648" } }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label="Día" name="dia" variant="outlined"
                value={formData.dia} onChange={handleChange}
                InputLabelProps={{ style: { color: "#1f0648" } }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField fullWidth label="Año" name="anio" variant="outlined"
                value={formData.anio} onChange={handleChange}
                InputLabelProps={{ style: { color: "#1f0648" } }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={3}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="genero-label" sx={{ color: "#1f0648" }}>Género</InputLabel>
                  <Select
                    labelId="genero-label"
                    name="genero"
                    value={formData.genero}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                  >
                    <MenuItem value="M">Masculino</MenuItem>
                    <MenuItem value="F">Femenino</MenuItem>
                    <MenuItem value="O">Otro</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="residencia-label" sx={{ color: "#1f0648" }}>País/ región de residencia</InputLabel>
                  <Select
                    labelId="residencia-label"
                    name="residencia"
                    value={formData.residencia}
                    onChange={handleChange}
                    sx={{ backgroundColor: "white", borderRadius: 1 }}
                  >
                    <MenuItem value="mx">México</MenuItem>
                    <MenuItem value="us">Estados Unidos</MenuItem>
                    <MenuItem value="es">España</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default PassengerForm;
