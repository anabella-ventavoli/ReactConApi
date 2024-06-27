import { useState, useEffect } from "react";

const useFetchAlojamiento = (id) => {
  const [alojamiento, setAlojamiento] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${id}`);
        if (response.ok) {
          const data = await response.json();
          setAlojamiento(data);
        } else {
          console.error('Error al obtener lista de alojamientos.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [id]); // Añade id como dependencia

  return alojamiento;
};

export default useFetchAlojamiento;
