
const PostServicios = async (servicios, id) => {

    for (const servicio of servicios) {
      const servicioAlojamiento = {"idAlojamiento": id, "idServicio": servicio}
  
      try {
        const response = await fetch("http://localhost:3001/alojamientosServicios/createAlojamientoServicio", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(servicioAlojamiento)
        });
        if (response.ok) {
          console.log("Servicio agregado");       
        } else {
          console.log("Error al agregar servicio");
        }
      } catch (error) {
        console.log(error);
      }
    }
    alert ("Servicios agregados"); 
  }
  
  export default PostServicios;
  