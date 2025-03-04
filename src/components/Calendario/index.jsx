import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const FlightDatePicker = ({ value, onChange, name, placeholder }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white", // Fondo blanco
        borderRadius: "10px", // Bordes redondeados
        padding: "8px 12px", // Espaciado interno
        width: "100%",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Sombra ligera
      }}
    >
      <TextField
        name={name}
        type="date"
        value={value}
        onChange={onChange}
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: true,
          sx: {
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "Poppins",
            color: value ? "#29299a" : "#737373",
            cursor: "pointer",
            backgroundColor: "transparent",
            borderRadius: "10px",
            "&::placeholder": { color: "#737373" },
            "&::-webkit-calendar-picker-indicator": {
              opacity: 1,
              cursor: "pointer",
            },
          },
        }}
      />
    </Box>
  );
};

export default FlightDatePicker;
