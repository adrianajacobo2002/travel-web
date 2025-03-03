import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/authService"; // Importa el servicio
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import avion from "../../assets/img/avion.png"; 

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpia errores previos

    try {
      const data = await login(formData.email, formData.password);
      console.log("Login exitoso:", data);
      navigate("/dashboard"); // Redirige tras el login
    } catch (err) {
      setError(err || "Error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", minHeight: "100vh", alignItems: "center" }}>
      <Card sx={{ padding: 4, borderRadius: 5, textAlign: "center", width: "100%" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#1f0648" }}>¡Bienvenido a <br /> SkyFare!</Typography>
        <CardMedia component="img" image={avion} alt="Avión" sx={{ maxWidth: "20%", height: "auto", margin: "0 auto", mb: 2 }} />
        
        <form onSubmit={handleSubmit}>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 0.5, color: "#1f0648", fontSize: "16px" }}>EMAIL</Typography>
            <TextField fullWidth id="email" label="Email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleChange} sx={{ mb: 2 }} />
            
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt: 2, mb: 0.5, color: "#1f0648", fontSize: "16px" }}>PASSWORD</Typography>
            <TextField fullWidth id="password" label="Password" variant="outlined" type="password" name="password" value={formData.password} onChange={handleChange} />
          </CardContent>

          {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "#1f0648", "&:hover": { backgroundColor: "#150336" }, borderRadius: "20px" }}>Iniciar Sesión</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
