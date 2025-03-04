import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { register } from "../../service/authService"; // Importa la función de registro

const CustomPaper = styled(Paper)({
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#999",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#24107D",
    },
  },
});

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    contrasena: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    console.log("Datos enviados al backend:", formData); // ✅ Verifica en la consola

    try {
      const response = await register(
        formData.nombre,
        formData.apellido,
        formData.email,
        formData.contrasena,
        formData.telefono
      );
      console.log("Registro exitoso:", response);
      navigate("/login"); // Redirigir al login después del registro exitoso
    } catch (err) {
      console.error("Error en el registro:", err);
      setError(
        err.response?.data?.message || "Error al registrarse, intenta de nuevo."
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <CustomPaper>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#29299a"
            gutterBottom
          >
            ¡Bienvenido a <span style={{ color: "#29299a" }}>SkyFare!</span>
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: "100%", mt: 3, borderRadius: "8px" }}
          >
            <CustomTextField
              label="Nombre"
              name="nombre"
              fullWidth
              margin="normal"
              value={formData.nombres}
              onChange={handleChange}
              required
            />
            <CustomTextField
              label="Apellido"
              name="apellido"
              fullWidth
              margin="normal"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
            <CustomTextField
              label="Tel"
              name="telefono"
              fullWidth
              margin="normal"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
            <CustomTextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <CustomTextField
              label="Contraseña"
              name="contrasena"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" color="#29299a">
                  Iniciar Sesión
                </Link>
              </Typography>
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#29299a",
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              Registrarse
            </Button>
          </Box>
        </CustomPaper>
      </Container>
    </Box>
  );
};

export default Register;
