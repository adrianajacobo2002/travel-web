import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AccordionFlight from "../components/AccordionFlight";

export default function SelectedFlight() {
  return (
    <Box
      id="selectedFlightContainer"
      name="selectedFlightContainer"
      sx={{
        backgroundColor: "#1f0648",
        margin: "auto",
        width: "1000px",
        mb: 4,
        p: 2,
      }}
    >
      <Grid
        id="selectedFlightGrid"
        name="selectedFlightGrid"
        container
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Izquierda: detalles del viaje */}
        <Grid
          id="flightDetailsLeft"
          name="flightDetailsLeft"
          item
          xs={8}
        >
          <Typography
            id="flightRoute"
            name="flightRoute"
            variant="h6"
            sx={{ color: "white", textAlign: "left" }}
          >
            México{" "}
            <CompareArrowsIcon
              sx={{ verticalAlign: "middle", mx: 1, color: "white" }}
            />{" "}
            Japón
          </Typography>
          <Typography
            id="flightInfo"
            name="flightInfo"
            variant="body1"
            sx={{ color: "white", textAlign: "left" }}
          >
            Redondo • Económica • 2 pasajeros
          </Typography>
        </Grid>

        {/* Derecha: precio y botón */}
        <Grid
          id="flightDetailsRight"
          name="flightDetailsRight"
          item
          xs={4}
          sx={{ textAlign: "right" }}
        >
          <Typography
            id="flightPrice"
            name="flightPrice"
            variant="h4"
            sx={{ color: "white" }}
          >
            $1500
          </Typography>
          <Button
            id="flightNextStepButton"
            name="flightNextStepButton"
            variant="contained"
            sx={{ mt: 1, borderRadius: "8px" }}
          >
            Siguiente paso
          </Button>
        </Grid>
      </Grid>
      <Typography
            id="flightRoute"
            name="flightRoute"
            variant="h6"
            sx={{ color: "white", textAlign: "left" }}
          >
            <br/>Vuelos Seleccionados{" "}
            
          </Typography>

        <AccordionFlight />
    </Box>
  );
}