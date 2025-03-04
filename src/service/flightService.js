import axios from "axios";

const API_URL = "http://localhost:8080/vuelos"; // Ajusta esto según tu backend

const FlightService = {
  buscarVuelos: async (from, to, departure, returnDate = null, flightClass, roundTrip) => {
    try {
      const params = {
        origen: from,
        destino: to,
        fechaSalida: `${departure} 00:00:00`, // Formato esperado por el backend
        tipoVuelo: roundTrip ? "redondo" : "sencillo",
      };
      
      if (returnDate) {
        params.fechaRegreso = `${returnDate} 00:00:00`;
      }

      if (flightClass) {
        const classMapping = {
          Economy: "economica",
          Standard: "ejecutiva",
          Premium: "primera"
        };
        params.clase = classMapping[flightClass] || flightClass;
      }

      const response = await axios.get(`${API_URL}/buscar`, { params });
      return response.data.map(flight => ({
        id: flight.id_vuelo,
        airline: flight.aerolinea.nombre,
        flightNumber: flight.numero_vuelo,
        origin: flight.origen,
        destination: flight.destino,
        departureTime: flight.fecha_salida,
        returnTime: flight.fecha_regreso,
        duration: flight.duracion,
        price: flight.precio_base,
        flightType: flight.tipo_vuelo,
        roundTripId: flight.id_vuelo_regreso
      }));
    } catch (error) {
      console.error("Error al buscar vuelos", error);
      throw error;
    }
  },
};

export default FlightService;