import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup
} from "@mui/material";

export default function MyTickets() {
  return (
    <Box
      id="myTicketsContainer"
      name="myTicketsContainer"
      sx={{
        backgroundColor: "#1f0648", // Fondo morado principal
        minHeight: "100vh",
        p: 2,
      }}
    >
      {/* Fila superior con el título centrado */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            id="ticketsTitle"
            name="ticketsTitle"
            variant="h4"
            align="center"
            color="white"
            sx={{ mb: 2 }}
          >
            Mis Boletos
          </Typography>
        </Grid>

        {/* Fila inferior con dos columnas: filtros (izq) y tickets (der) */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* Columna izquierda (aprox. 30%) */}
            <Grid
              id="leftFilterGrid"
              name="leftFilterGrid"
              item
              xs={12}
              md={4}
            >
              <Card
                id="filterCard"
                name="filterCard"
                sx={{
                  backgroundColor: "#1f0648",
                  border: "1px solid white",
                  borderRadius: "8px",
                  p: 2,
                }}
              >
                <FormControl
                  id="filterFormControl"
                  name="filterFormControl"
                  component="fieldset"
                  variant="standard"
                >
                  <Typography
                    id="filterTitle"
                    name="filterTitle"
                    variant="h6"
                    color="white"
                    gutterBottom
                  >
                    Filtrar por
                  </Typography>

                  <FormGroup
                    id="filterFormGroup"
                    name="filterFormGroup"
                  >
                    <FormControlLabel
                      id="pendingFilterLabel"
                      name="pendingFilterLabel"
                      control={
                        <Checkbox
                          id="pendingCheckbox"
                          name="pendingCheckbox"
                          sx={{ color: "white" }}
                        />
                      }
                      label="Pendiente"
                      sx={{ color: "white", ml: 0 }}
                    />
                    <FormControlLabel
                      id="completedFilterLabel"
                      name="completedFilterLabel"
                      control={
                        <Checkbox
                          id="completedCheckbox"
                          name="completedCheckbox"
                          sx={{ color: "white" }}
                        />
                      }
                      label="Completado"
                      sx={{ color: "white", ml: 0 }}
                    />
                  </FormGroup>
                </FormControl>
              </Card>
            </Grid>

            {/* Columna derecha (aprox. 70%) */}
            <Grid
              id="rightTicketsGrid"
              name="rightTicketsGrid"
              item
              xs={12}
              md={8}
            >
              {/* Aquí irán los tickets (otro componente). */}
              <Box
                id="ticketsContainer"
                name="ticketsContainer"
                sx={{
                  backgroundColor: "#1f0648",
                  borderRadius: "8px",
                  p: 2,
                  minHeight: "200px",
                  border: "1px solid white",
                }}
              >
                <Typography
                  id="ticketsPlaceholder"
                  name="ticketsPlaceholder"
                  variant="body1"
                  color="white"
                >
                  Aquí se mostrarán los boletos.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    </Box>
  );
}
