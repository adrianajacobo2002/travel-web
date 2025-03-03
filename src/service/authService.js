import axios from "axios";

const API_URL = "http://localhost:8080/auth"; // Asegúrate de que la URL sea correcta

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, contrasena: password });
    localStorage.setItem("token", response.data.token); // Guarda el token en localStorage
    localStorage.setItem("rol", response.data.rol); // Guarda el rol si es necesario
    return response.data;
  } catch (error) {
    console.error("Error en el login:", error);
    throw error.response ? error.response.data.message : "Error en la autenticación";
  }
};

export const register = async (nombres, apellidos, email, password, dui) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      nombres,
      apellidos,
      email,
      contrasena: password,
      dui,
    });
    return response.data;
  } catch (error) {
    console.error("Error en el registro:", error);
    throw error.response ? error.response.data.message : "Error al registrarse";
  }
};

export const getUserInfo = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener información del usuario:", error);
    throw error;
  }
};
