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

        {/* Fila que contiene los dos "columnas": Filtros (izq) y Tickets (der) */}
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            alignItems="stretch"  // <-- hace que ambas columnas tengan la misma altura
          >
            {/* Columna izquierda (filtros) */}
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
                  height: "100%", // <-- ocupa toda la altura disponible
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

            {/* Columna derecha (tickets) */}
            <Grid
              id="rightTicketsGrid"
              name="rightTicketsGrid"
              item
              xs={12}
              md={8}
            >
              <Box
                id="ticketsContainer"
                name="ticketsContainer"
                sx={{
                  backgroundColor: "#1f0648",
                  borderRadius: "8px",
                  p: 2,
                  minHeight: "200px",
                  border: "1px solid white",
                  height: "100%", // <-- ocupa toda la altura disponible
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
                {/* Tu componente de tickets vendría aquí */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
