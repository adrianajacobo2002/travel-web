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
import { login } from "../../service/authService";

// Estilos personalizados
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

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(formData.email, formData.password);
      console.log("Login exitoso:", data);
      navigate("/dashboard");
    } catch (err) {
      setError(err || "Error al iniciar sesión. Inténtalo de nuevo.");
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
        backgroundColor: "#1f0648",
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
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ fontFamily: "Nunito, sans-serif" }}
            />
            <CustomTextField
              label="Contraseña"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
              sx={{ fontFamily: "Nunito, sans-serif" }}
            />

            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2">
                ¿No tienes una cuenta?{" "}
                <Link href="/register" color="#29299a">
                  Regístrate
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
                fontFamily: "Nunito, sans-serif",
                textTransform: "none",
              }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </CustomPaper>
      </Container>
    </Box>
  );
};

export default Login;
