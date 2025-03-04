import React from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import MCicon from "../assets/img/mastercard_icon.svg";
import VSicon from "../assets/img/visa_icon.svg";

import PassengerForm from "../components/PassengerForm";

// Componente de Input personalizado con BootstrapInput
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(1),
  },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 16px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    "&:focus": {
      borderRadius: 8,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const Payment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f0648", // Fondo morado principal
        minHeight: "100vh",
        padding: 3,
      }}
    >
      {/* Sección de Información del Viaje (sin borde blanco, fondo puro) */}
      <Box
        sx={{
          backgroundColor: "#1f0648",
          maxWidth: 1000,
          margin: "auto",
          mb: 4,
          p: 2,
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Izquierda: detalles del viaje */}
          <Grid item xs={8}>
            <Typography variant="h6" sx={{ color: "white", textAlign: "left" }}>
              México{" "}
              <CompareArrowsIcon
                sx={{ verticalAlign: "middle", mx: 1, color: "white" }}
              />{" "}
              Japón
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", textAlign: "left" }}
            >
              Redondo • Económica • 2 pasajeros
            </Typography>
          </Grid>
          {/* Derecha: precio y botón */}
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              $1500
            </Typography>
            <Button variant="contained" sx={{ mt: 1, borderRadius: "8px" }}>
              Siguiente paso
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ maxWidth: 600, margin: "auto", mb: 4 }}>
        <Typography variant="h6" sx={{ color: "white", textAlign: "left" }}>
          Detalle del pasajero{" "}
        </Typography>
        <Typography variant="body1" sx={{ color: "white", textAlign: "left" }}>
          Ingrese los nombres de los pasajeros tal como aparecen en sus
          respectivos documentos de identidad oficial con foto.{" "}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 600, margin: "auto", mb: 4 }}>
        <PassengerForm />
      </Box>

      {/* Sección de Información de Contacto */}
      <Typography variant="h6" align="left" sx={{ color: "white", mb: 2 }}>
        Informacion de contacto
      </Typography>
      <Card
        sx={{
          border: "1px solid white",
          borderRadius: "8px",
          background: " #1f0648 ",
          padding: 0.5,
          maxWidth: 600,
          margin: "auto",
          mb: 4,
        }}
      >
        <Grid container spacing={2} sx={{ p: 2 }}>
          {/* Email y Confirmar Email */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 1, textAlign: "left" }}
            >
              Email
            </Typography>
            <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
              <BootstrapInput id="email" placeholder="Ingrese su email" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 1, textAlign: "left" }}
            >
              Confirmar Email
            </Typography>
            <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
              <BootstrapInput
                id="confirm-email"
                placeholder="Confirme su email"
              />
            </FormControl>
          </Grid>
          {/* Teléfono y Motivo de viaje */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 1, textAlign: "left" }}
            >
              Teléfono
            </Typography>
            <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
              <BootstrapInput id="telefono" placeholder="Ingrese su teléfono" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 1, textAlign: "left" }}
            >
              Motivo de viaje
            </Typography>
            <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
              <BootstrapInput
                id="motivo-viaje"
                placeholder="Ingrese el motivo de viaje"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Card>

      {/* Sección de Información de Pago */}
      <Typography variant="h6" align="left" sx={{ color: "white", mb: 2 }}>
        Informacion de pago
      </Typography>
      <Card
        sx={{
          border: "1px solid white",
          borderRadius: "8px",
          background: "linear-gradient(to bottom, white 20%, #1f0648 20%)",
          padding: 0.5,
          maxWidth: 600,
          margin: "auto",
        }}
      >
        {/* Línea superior para imágenes */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: 2,
            mb: 2,
            p: 2,
          }}
        >
          <img
            src={VSicon}
            alt="visa icon"
            style={{
              borderRadius: "8px",
              width: "50px",
              height: "50px",
            }}
          />
          <img
            src={MCicon}
            alt="mastercard icon"
            style={{
              borderRadius: "8px",
              width: "50px",
              height: "50px",
            }}
          />
        </Box>
        <Grid container spacing={2} sx={{ p: 2 }}>
          {/* Name Owner y Expiration Date */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 1, textAlign: "left" }}
            >
              Name Owner
            </Typography>
            <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
              <BootstrapInput id="name-owner" placeholder="Ingrese el nombre" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 1, textAlign: "left" }}
            >
              Expiration Date
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
                  <BootstrapInput id="exp-month" placeholder="MM" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
                  <BootstrapInput id="exp-day" placeholder="DD" />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          {/* Card Number y Security Code */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 1, textAlign: "left" }}
            >
              Card Number
            </Typography>
            <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
              <BootstrapInput
                id="card-number"
                placeholder="Número de tarjeta"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 1, textAlign: "left" }}
            >
              Security Code
            </Typography>
            <FormControl variant="standard" fullWidth sx={{ m: 0 }}>
              <BootstrapInput
                id="security-code"
                placeholder="Código de seguridad"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Payment;
