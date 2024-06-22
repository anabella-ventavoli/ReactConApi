
const createAlojamiento = async (nuevoAlojamiento) => {
    try {
      const response = await fetch("http://localhost:3001/alojamiento/createAlojamiento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoAlojamiento)
      });
  
      if (response.ok) {
        console.log("Alojamiento creado exitosamente");
        return true;
      } else {
        console.error("Error al crear el alojamiento");
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };
  
  export default createAlojamiento;
  








