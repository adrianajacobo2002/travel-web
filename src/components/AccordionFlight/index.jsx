import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import avion from "../assets/img/avion.png";

export default function AccordionFlight() {
  return (
    <Box
      id="accordionFlightContainer"
      name="accordionFlightContainer"
      sx={{
        backgroundColor: "#1f0648",
        p: 2,
      }}
    >
      <Accordion
        id="flightAccordion"
        name="flightAccordion"
        sx={{
          backgroundColor: "#1f0648",
          border: "1px solid #fff",
          borderRadius: "8px",
          color: "#fff", // Para que todo el texto dentro sea blanco
        }}
      >
        <AccordionSummary
          id="flightAccordionSummary"
          name="flightAccordionSummary"
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="flightAccordionContent"
        >
          {/* Contenedor principal del summary */}
          <Box
            id="summaryContent"
            name="summaryContent"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Icono a la izquierda (20%) */}
            <Box
              id="flightIconContainer"
              name="flightIconContainer"
              sx={{
                flex: "0 0 20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={avion}
                alt="Icono Avión"
                sx={{ width: 40, height: 40 }}
              />
            </Box>

            {/* Información del vuelo (80%) */}
            <Box
              id="flightInfoContainer"
              name="flightInfoContainer"
              sx={{
                flex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              {/* Ajusta estos textos según necesites */}
              <Typography
                id="flightDate"
                name="flightDate"
                variant="body1"
              >
                Sábado 14 junio, 2025
              </Typography>
              <Typography
                id="flightSchedule"
                name="flightSchedule"
                variant="body1"
              >
                06:40 PM - 11:20 PM
              </Typography>
              <Typography
                id="flightDuration"
                name="flightDuration"
                variant="body1"
              >
                05h 40 min
              </Typography>
              <Typography
                id="flightType"
                name="flightType"
                variant="body1"
              >
                Vuelo Directo
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails
          id="flightAccordionDetails"
          name="flightAccordionDetails"
        >
          <Typography
            id="selectPlanText"
            name="selectPlanText"
            variant="body2"
            sx={{ color: "#fff" }}
          >
            Selecciona plan de vuelo que deseas
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}