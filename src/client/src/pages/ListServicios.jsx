import { useState, useEffect } from "react";


const ListServicios = () => {
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/servicio/getAllServicios");
        if (response.ok) {
          const data = await response.json();
          setServicios(data);
        } else {
          console.error('Error al obtener los tipos de alojamiento.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return  servicios;
};

export default ListServicios;
