import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  MenuItem,
  Select,
  Icon,
} from "@mui/material";
import { LocationOn } from "@mui/icons-material";

import FlightDatePicker from "../../components/calendario/calendario";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import "./style.css";

const FlightSearchPage = () => {
  const [tripType, setTripType] = useState("round-trip");
  const [passengers, setPassengers] = useState(2);
  const [travelClass, setTravelClass] = useState("economy");

  return (
    <Box
      className="flight-search-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        padding: "20px",
        color: "white",
      }}
    >
      {/* Controles superiores (dropdowns) */}
      <Box
        className="top-controls"
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: "20px",
          marginBottom: "20px",
          border: "none",
        }}
      >
        {/* Dropdown de Tipo de Viaje */}
        <Select
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          className="dropdown"
          sx={{
            background: "transparent !important",
            color: "white !important",
            fontWeight: "bold !important",
            border: "none !important",
            boxShadow: "none !important",
            outline: "none !important",
            "&:focus": {
              border: "none !important",
              boxShadow: "none !important",
              outline: "none !important",
            },
            "&:hover": {
              border: "none !important",
              boxShadow: "none !important",
            },
          }}
        >
          <MenuItem value="round-trip">Viaje Redondo</MenuItem>
          <MenuItem value="one-way">Viaje Sencillo</MenuItem>
        </Select>

        {/* Dropdown de Pasajeros */}
        <Select
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          className="dropdown"
        >
          {[...Array(10).keys()].map((num) => (
            <MenuItem key={num + 1} value={num + 1}>
              {num + 1} Pasajero{num + 1 > 1 ? "s" : ""}
            </MenuItem>
          ))}
        </Select>

        {/* Dropdown de Clase de Viaje */}
        <Select
          value={travelClass}
          onChange={(e) => setTravelClass(e.target.value)}
          className="dropdown"
        >
          <MenuItem value="economy">Clase Económica</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="first">Primera Clase</MenuItem>
        </Select>
      </Box>

      {/* Controles de búsqueda */}
      <Box className="search-controls">
        <TextField
          placeholder="Origen"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "250px",
            height: "56px",
            ".MuiOutlinedInput-root": {
              borderRadius: "10px",
              border: "0px solid #d1d1d1",
              backgroundColor: "white",
              height: "56px",
            },
            ".MuiInputBase-input::placeholder": {
              color: "#7488db", // Color del placeholder
              fontSize: "16px", // Tamaño del texto
              fontWeight: "bold",
              opacity: 1, // Asegura que se vea
            },
          }}
        />

        <CompareArrowsIcon className="cambio" />

        <TextField
          placeholder="Destino"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "250px",
            height: "56px",
            ".MuiOutlinedInput-root": {
              borderRadius: "10px",
              border: "0px solid #d1d1d1",
              backgroundColor: "white",
              height: "56px",
            },
            ".MuiInputBase-input::placeholder": {
              color: "#7488db", // Color del placeholder
              fontSize: "16px", // Tamaño del texto
              fontWeight: "bold",
              opacity: 1, // Asegura que se vea
            },
          }}
          className="letra"
        />

        {/* Componente de calendario */}

        <div>
          <FlightDatePicker />
        </div>
        <div>
          <FlightDatePicker />
        </div>

        <Button
          className="search-button"
          sx={{
            width: "150px",
            height: "56px",
          }}
        >
          Buscar
        </Button>
      </Box>

      {/* Contenedor principal */}
      <Box className="content-container">
        {/* Filtros */}
        <Box className="filters-container">
          <Typography className="filter-title" fontWeight="bold">
            Filtrar por:
          </Typography>

          {/* Filtros de escalas */}
          <Typography className="filter-subtitle" fontWeight="bold" pt="10px">
            Escalas
          </Typography>
          <FormControlLabel
            control={<Checkbox className="checkbox-custom" defaultChecked />}
            label="Directo"
          />
          <FormControlLabel
            control={<Checkbox className="checkbox-custom" />}
            label="1 Escala"
          />
          <FormControlLabel
            control={<Checkbox className="checkbox-custom" />}
            label="2 o más escalas"
          />

          {/* Filtros de aerolíneas */}
          <Typography className="filter-subtitle" fontWeight="bold" pt="10px">
            Aerolíneas
          </Typography>
          <FormControlLabel
            control={<Checkbox className="checkbox-custom" defaultChecked />}
            label="American Airlines"
          />
          <FormControlLabel
            control={<Checkbox className="checkbox-custom" />}
            label="United"
          />
          <FormControlLabel
            control={<Checkbox className="checkbox-custom" />}
            label="Avianca"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FlightSearchPage;