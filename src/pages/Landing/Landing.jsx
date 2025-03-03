import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";

import ImageLanding from "../../assets/img/ImgLanding.png"; // Ruta del SVG


const Landing = () => {
  const [formData, setFormData] = useState({
    from: "Italia",
    to: "Florencia",
    arrival: "2025-03-25",
    departure: "2025-04-10",
    passengers: 2,
    class: "Economy",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita recargar la página

    const response = await fetch("https://tu-api.com/vuelos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Respuesta del servidor:", data);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1f0648",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Contenedor principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        {/* Sección de Título */}
        <Box sx={{ flex: 1 }}>
          <Typography
            id="title"
            variant="h2"
            sx={{ color: "white", fontWeight: "bold", mb: 3, fontSize: { xs: "24px", sm: "36px", md: "48px", textAlign: "left" } }}
          >
            Explora el mundo <br /> con
            
            <span style={{ color: "white" }}> SkyFare </span> <br />
            ........
          </Typography>
        </Box>
        
        {/* Sección de Imagen (Placeholder) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={ImageLanding} // Reemplazar con la imagen real
            alt="Viajero en el aeropuerto"
            id="hero-image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>

      {/* Formulario de Búsqueda */}
      <Box
        component="form"
        id="flight-search-form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 2,
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px 15px 0 0", /* Redondeado solo arriba */
          maxWidth: "100%",
          marginTop: "2rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          alignItems: "center",
          textAlign: "left", /* Alinea títulos a la izquierda */
        }}
      >
        {[
          { label: "FROM", name: "from", options: ["Italia", "España", "Francia"] },
          { label: "TO", name: "to", options: ["Florencia", "Madrid", "París"] },
          { label: "ARRIVAL", name: "arrival", type: "date" },
          { label: "DEPARTURE", name: "departure", type: "date" },
          { label: "PASSENGERS", name: "passengers", options: [1, 2, 3, 4, 5, 6] },
          { label: "CLASS", name: "class", options: ["Economy", "Standard", "Premium"] },
        ].map((field, index) => (
          <FormControl key={index} fullWidth>
            <Typography
              id={`${field.name}-label`}
              sx={{
                color: "#29299a",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                textAlign: "left", /* Alineación a la izquierda */
              }}
            >
              {field.label}
            </Typography>
            {field.type === "date" ? (
              <input
                type="date"
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "28px",
                  border: "none",
                  borderRadius: "5px",
                  textAlign: "center",
                  outline: "none",
                }}
              />
            ) : (
              <Select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                sx={{
                  color: "#29299a",
                  fontWeight: "bold",
                  textAlign: "left",
                  border: "none",
                  fontSize: "28px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&:focus": { backgroundColor: "transparent" },
                }}
              >
                {field.options.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
        ))}
      </Box>

      {/* Botón de Buscar Vuelo */}
      <Button
        id="search-flight-button"
        fullWidth
        sx={{
          backgroundColor: "#29299a",
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px", /* Reducida la altura */
          borderRadius: "0 0 15px 15px", /* Pegado al bloque superior */
          textTransform: "none",
          maxWidth: "100%",
          "&:hover": { backgroundColor: "#1f0648" },
        }}
      >
        Buscar Vuelo
      </Button>
    </Box>
  );
};

export default Landing;
