import { useState, useEffect } from "react";

const ListTipos = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
        if (response.ok) {
          const data = await response.json();
          setTiposAlojamiento(data);
        } else {
          console.error('Error al obtener los tipos de alojamiento.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return  tiposAlojamiento;
};

export default ListTipos;
