import {useEffect, useState}from 'react'

const UseFetchAlojamientos = () => {

    const [tiposAlojamiento, setTiposAlojamiento] = useState([]);

    useEffect(() => {

        const fetchAlojamientos = async () => {
            try {
                const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
                if (response.ok) {
                    const nuevoJson = await response.json();
                    setTiposAlojamiento(nuevoJson);
    
                } else {
                    console.error ('Error al obtener los tipos de alojamiento.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchAlojamientos(); 
    }, []);  // hace que useEffect se ejecute una sola vez

  return [tiposAlojamiento, setTiposAlojamiento];
    
    
};

export default UseFetchAlojamientos
