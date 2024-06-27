import { useState, useEffect } from "react";

const ListImagenes = () => {
  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/imagen/getAllImagenes");
        if (response.ok) {
          const data = await response.json();
          setImagenes(data);
        } else {
          console.error('Error al obtener las imágenes.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return  [imagenes, setImagenes];
};

export default ListImagenes;
