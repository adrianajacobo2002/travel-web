export const getUserFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // Decodifica el payload del token
      console.log("Payload decodificado:", payload); // 👈 LOG para verificar el contenido
  
      return payload.id_usuario ?? null; // Devuelve solo el ID del usuario
    } catch (error) {
      console.error("Error decodificando token:", error);
      return null;
    }
  };
  