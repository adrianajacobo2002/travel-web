import React, { useState } from "react";
import "../../App.css";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";

import avion from "../../assets/img/avion.png"; // Ruta del SVG


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    console.log("Datos enviados:", formData);
    // Aquí puedes llamar a tu API con fetch o axios para enviar los datos al backend
  };

  return (
    <>
    
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Card
        sx={{ padding: 4, borderRadius: 5, textAlign: "center", width: "100%" }}
      >
        {/* Título del Login */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, color: "#1f0648" }}
        >
          ¡Bienvenido a <br /> SkyFare!
        </Typography>

        {/* Imagen del avión debajo del texto */}
        <CardMedia
          component="img"
          image={avion}
          alt="Avión"
          sx={{
            maxWidth: "20%", 
            height: "auto",
            margin: "0 auto",
            mb: 2,
          }}
        />

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit}>
          <CardContent sx={{ textAlign: "left" }}>
            {/* Etiqueta "EMAIL" */}
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                mb: 0.5,
                color: "#1f0648",
                fontSize: { xs: "8px", sm: "12px", md: "16px" },
              }}
            >
              EMAIL
            </Typography>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            {/* Etiqueta "PASSWORD" */}
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                mt: 2,
                mb: 0.5,
                color: "#1f0648",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
            >
              PASSWORD
            </Typography>
            <TextField
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </CardContent>

          {/* Botón de registro */}
          <CardActions sx={{ flexDirection: "column", gap: 1 }}>
            <Typography variant="body2">
              ¿No tienes una cuenta?{" "}
              <Button
                variant="text"
                sx={{ textTransform: "none", color: "#1f0648" }}
              >
                Regístrate
              </Button>
            </Typography>
          </CardActions>

          {/* Botón de inicio de sesión */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#1f0648",
              "&:hover": { backgroundColor: "#150336" },
              borderRadius: "20px",
            }}
          >
            Iniciar Sesión
          </Button>
        </form>
      </Card>
    </Container>
    </>
  );
};

export default Login;
