import { useState, useEffect } from "react";

const useFetchServiciosAsociados = () => {
  const [alojServicio, setAlojServicio] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {                                             
        const response = await fetch(`http://localhost:3001/alojamientosServicios/getAllAlojamientoServicios`);
        if (response.ok) {
          const data = await response.json();
          setAlojServicio(data);
        } else {
          console.error('Error al obtener los datos.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Añade id como dependencia

  return [alojServicio, setAlojServicio]
};

export default useFetchServiciosAsociados;
