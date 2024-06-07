import { useState, useEffect } from "react";
const ListTiposAlojamiento = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
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

  return (
    <div className="table-container">
      <h1>Tabla Tipos de Alojamiento</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {tiposAlojamiento.map(tipo => (
            <tr key={tipo.id} >
              <td>{tipo.idTipoAlojamiento}</td>
              <td>{tipo.Descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTiposAlojamiento;
