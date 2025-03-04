import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

// Importar imágenes
import Cloud1 from "../../assets/img/cloud1.png";
import Traveler from "../../assets/img/traveler.png";
import Curve1 from "../../assets/img/curve1.png";
import Curve2 from "../../assets/img/curve2.png";

const Landing = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    arrival: "",
    departure: "",
    passengers: "",
    class: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Elementos decorativos */}
      <Box
        component="img"
        src={Cloud1}
        alt="Nube"
        sx={{ position: "absolute", top: "15%", left: "45%", width: "125px" }}
      />
      <Box
        component="img"
        src={Curve1}
        alt="Curva"
        sx={{ position: "absolute", top: "13%", left: "25%", width: "300px" }}
      />
      <Box
        component="img"
        src={Curve2}
        alt="Curva"
        sx={{
          position: "absolute",
          bottom: "28%",
          right: "18%",
          width: "200px",
        }}
      />

      {/* Contenedor principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Sección de texto */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            marginTop: 15,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "24px", sm: "46px", md: "56px" },
            }}
          >
            Explora el mundo <br /> con{" "}
            <span style={{ color: "white" }}>SkyFare</span> <br />
            ........
          </Typography>
        </Box>

        {/* Imagen del viajero */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Traveler}
            alt="Viajero en el aeropuerto"
            style={{ maxWidth: "90%", height: "auto", zIndex: 1 }}
          />
        </Box>
      </Box>

      {/* Formulario de búsqueda */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 0,
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px 15px 0 0",
          maxWidth: "1200px",
          width: "100%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Campos del formulario con separadores */}
        {[
          {
            label: "FROM",
            name: "from",
            type: "text",
            placeholder: "City or Country",
          },
          {
            label: "TO",
            name: "to",
            type: "text",
            placeholder: "City or Country",
          },
          {
            label: "ARRIVAL",
            name: "arrival",
            type: "date",
            placeholder: "Select date",
          },
          {
            label: "DEPARTURE",
            name: "departure",
            type: "date",
            placeholder: "Select date",
          },
          {
            label: "PASSENGERS",
            name: "passengers",
            type: "select",
            options: [1, 2, 3, 4, 5, 6],
            placeholder: "Select",
          },
          {
            label: "CLASS",
            name: "class",
            type: "select",
            options: ["Economy", "Standard", "Premium"],
            placeholder: "Select",
          },
        ].map((field, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              position: "relative",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#737373",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              {field.label}
            </Typography>

            {/* Selects corregidos para "PASSENGERS" y "CLASS" */}
            {field.type === "select" ? (
              <Select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                fullWidth
                variant="standard"
                displayEmpty
                disableUnderline
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  color: formData[field.name] ? "#29299a" : "#737373",
                  textAlign: "center",
                }}
              >
                <MenuItem value="" disabled>
                  {field.placeholder}
                </MenuItem>
                {field.options.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Box sx={{ position: "relative", width: "100%" }}>
                <TextField
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      textAlign: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      fontFamily: "Poppins",
                      color: formData[field.name] ? "#29299a" : "#737373",
                      cursor: field.type === "date" ? "pointer" : "text",
                      "&::placeholder": { color: "#737373" },
                      "&::-webkit-calendar-picker-indicator": {
                        opacity: field.type === "date" ? 0 : 1,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                      },
                    },
                  }}
                />

                {/* Ícono de calendario solo en los campos de fecha */}
                {field.type === "date" && (
                  <EventIcon
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#737373",
                      fontSize: "20px",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </Box>
            )}

            {/* Línea separadora entre campos */}
            {index !== 5 && (
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "100%",
                  width: "3px",
                  backgroundColor: "#29299a",
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Botón de búsqueda */}
      <Button
        onClick={handleSearch}
        fullWidth
        sx={{
          backgroundColor: "#29299a",
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "12px",
          borderRadius: "0 0 15px 15px",
          textTransform: "none",
          maxWidth: "1200px",
          width: "100%",
          transform: "none",
        }}
      >
        Buscar Vuelo
      </Button>
    </Box>
  );
};

export default Landing;
