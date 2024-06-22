import { useState, useEffect } from "react";

const ListAlojamientos = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/alojamiento/getAlojamientos");
        if (response.ok) {
          const data = await response.json();
          setAlojamientos(data);
        } else {
          console.error('Error al obtener lista de alojamientos.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return  [alojamientos, setAlojamientos]
};

export default ListAlojamientos;
