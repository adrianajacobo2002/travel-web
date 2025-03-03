import React from "react";
import { TextField, Button, Typography, Box, Container, Paper, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Container maxWidth="sm">
        <CustomPaper>
          <Typography variant="h5" fontWeight="bold" color="#29299a" gutterBottom>
            ¡Bienvenido a 
            <Typography variant="h5" fontWeight="bold" color="#29299a"> SkyFare!</Typography>
          </Typography>
          <Box component="form" sx={{ width: "100%", mt: 3, borderRadius: "8px" }}>
            <CustomTextField label="NAME" fullWidth margin="normal" />
            <CustomTextField label="LAST NAME" fullWidth margin="normal" />
            <CustomTextField label="TEL" fullWidth margin="normal" />
            <CustomTextField label="EMAIL" type="email" fullWidth margin="normal" />
            <CustomTextField label="PASSWORD" type="password" fullWidth margin="normal" />
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2">
                ¿Ya tienes una cuenta? <Link href="#" color="#29299a">Iniciar Sesión</Link>
              </Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3, backgroundColor: "#29299a", borderRadius: "8px" }}
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