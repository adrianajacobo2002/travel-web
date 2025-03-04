import axios from "axios";

const API_URL = "http://localhost:8080/vuelos"; // Ajusta según tu backend

export const searchFlights = async ({ origen, destino, fechaSalida, fechaRegreso, tipoVuelo, aerolinea }) => {
  try {
    const response = await axios.get(`${API_URL}/buscar`, {
      params: {
        origen,
        destino,
        fechaSalida,
        fechaRegreso,
        tipoVuelo,
        aerolinea
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al buscar vuelos:", error);
    throw error;
  }
};
