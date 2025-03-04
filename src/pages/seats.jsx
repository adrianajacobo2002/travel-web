import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  Divider,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

// Datos de ejemplo para el mapa de asientos
const seatRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const seatCols = ["A", "B", "C", "D", "E", "F"];

export default function SeatSelection() {
  return (
    <Box
      id="seatSelectionPage"
      name="seatSelectionPage"
      sx={{
        backgroundColor: "#1f0648",
        minHeight: "100vh",
        p: 4,
      }}
    >
      {/* ====== Sección Superior: Ciudades y Fechas ====== */}
      <Grid
        id="topInfoContainer"
        name="topInfoContainer"
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{ mb: 4 }}
      >
        {/* Ciudad Origen */}
        <Grid item>
          <Typography
            id="originCity"
            name="originCity"
            variant="h6"
            color="white"
            textAlign="center"
          >
            San Salvador
          </Typography>
          <Typography
            id="originDate"
            name="originDate"
            variant="body2"
            color="white"
            textAlign="center"
          >
            14 de junio de 2025
          </Typography>
        </Grid>

        {/* Flecha */}
        <Grid item>
          <CompareArrowsIcon
            id="citiesArrowIcon"
            name="citiesArrowIcon"
            sx={{ color: "white", fontSize: 30 }}
          />
        </Grid>

        {/* Ciudad Destino */}
        <Grid item>
          <Typography
            id="destinationCity"
            name="destinationCity"
            variant="h6"
            color="white"
            textAlign="center"
          >
            Los Ángeles
          </Typography>
          <Typography
            id="destinationDate"
            name="destinationDate"
            variant="body2"
            color="white"
            textAlign="center"
          >
            14 de junio de 2025
          </Typography>
        </Grid>
      </Grid>

      {/* ====== Sección Inferior: Panel Izquierdo (info) y Mapa de Asientos ====== */}
      <Grid
        id="bottomSectionContainer"
        name="bottomSectionContainer"
        container
        spacing={4}
      >
        {/* Columna Izquierda: Selección de asientos */}
        <Grid
          id="leftPanelGrid"
          name="leftPanelGrid"
          item
          xs={12}
          md={4}
        >
          <Card
            id="seatSelectionCard"
            name="seatSelectionCard"
            sx={{
              backgroundColor: "#1f0648",
              border: "1px solid white",
              borderRadius: "8px",
              p: 2,
            }}
          >
            <Typography
              id="seatSelectionTitle"
              name="seatSelectionTitle"
              variant="h6"
              color="white"
              sx={{ mb: 2 }}
            >
              Selecciona tus asientos
            </Typography>

            {/* Ejemplo de info básica */}
            <Typography
              id="flightClass"
              name="flightClass"
              variant="body1"
              color="white"
            >
              Clase: Economy
            </Typography>
            <Typography
              id="selectedSeatsInfo"
              name="selectedSeatsInfo"
              variant="body1"
              color="white"
              sx={{ mb: 2 }}
            >
              Asientos: B1, C1
            </Typography>

            <Divider sx={{ backgroundColor: "white", mb: 2 }} />

            {/* Leyenda de asientos como checkboxes */}
            <FormControl
              id="seatLegendFormControl"
              name="seatLegendFormControl"
              component="fieldset"
              variant="standard"
            >
              <FormGroup
                id="seatLegendFormGroup"
                name="seatLegendFormGroup"
              >
                <FormControlLabel
                  id="occupiedCheckboxLabel"
                  name="occupiedCheckboxLabel"
                  control={
                    <Checkbox
                      id="occupiedCheckbox"
                      name="occupiedCheckbox"
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#8a4af3",
                        },
                      }}
                    />
                  }
                  label="Ocupados"
                  sx={{ color: "white" }}
                />

                <FormControlLabel
                  id="selectedCheckboxLabel"
                  name="selectedCheckboxLabel"
                  control={
                    <Checkbox
                      id="selectedCheckbox"
                      name="selectedCheckbox"
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#8a4af3",
                        },
                      }}
                    />
                  }
                  label="Seleccionados"
                  sx={{ color: "white" }}
                />

                <FormControlLabel
                  id="availableCheckboxLabel"
                  name="availableCheckboxLabel"
                  control={
                    <Checkbox
                      id="availableCheckbox"
                      name="availableCheckbox"
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#8a4af3",
                        },
                      }}
                    />
                  }
                  label="Disponibles"
                  sx={{ color: "white" }}
                />
              </FormGroup>
            </FormControl>

            {/* Botón Siguiente */}
            <Button
              id="nextStepButton"
              name="nextStepButton"
              variant="contained"
              sx={{ mt: 3, borderRadius: "8px" }}
            >
              Siguiente
            </Button>
          </Card>
        </Grid>

        {/* Columna Derecha: Mapa de Asientos (cada asiento es un checkbox) */}
        <Grid
          id="seatMapGrid"
          name="seatMapGrid"
          item
          xs={12}
          md={8}
        >
          <Card
            id="seatMapCard"
            name="seatMapCard"
            sx={{
              backgroundColor: "#1f0648",
              border: "1px solid white",
              borderRadius: "8px",
              p: 2,
            }}
          >
            {/* Encabezado de columnas: A B C D E F */}
            <Box
              id="seatColumnsHeader"
              name="seatColumnsHeader"
              sx={{ display: "flex", justifyContent: "center", mb: 2 }}
            >
              {/* Espacio para alinear con la numeración de filas */}
              <Box sx={{ width: 32, mr: 2 }} />
              {seatCols.map((col) => (
                <Typography
                  key={col}
                  id={`columnHeader-${col}`}
                  name={`columnHeader-${col}`}
                  variant="body2"
                  color="white"
                  sx={{ width: 32, textAlign: "center", mx: 0.5 }}
                >
                  {col}
                </Typography>
              ))}
            </Box>

            {/* Filas de asientos */}
            {seatRows.map((row) => (
              <Box
                key={row}
                id={`seatRow-${row}`}
                name={`seatRow-${row}`}
                sx={{ display: "flex", justifyContent: "center", mb: 1 }}
              >
                {/* Número de fila */}
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ width: 32, textAlign: "right", mr: 2 }}
                >
                  {row}
                </Typography>

                {/* Asientos de la fila: cada uno es un checkbox */}
                {seatCols.map((col) => (
                  <Checkbox
                    key={col}
                    id={`seat-${row}${col}`}
                    name={`seat-${row}${col}`}
                    sx={{
                      color: "white", // color base
                      "&.Mui-checked": {
                        color: "#8a4af3", // color al estar checked
                      },
                      mx: 0.5,
                      // Para agrandar un poco el ícono
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />
                ))}
              </Box>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
