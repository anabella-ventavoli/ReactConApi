import { useState, useEffect } from "react";

const EditTiposAlojamiento = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [editIndice, setEditIndice] = useState(null);
  const [editDescripcion, setEditDescripcion] = useState("");

  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
        if (response.ok) {
          const data = await response.json(); // convierte la respuesta en json y lo pasa a data
          setTiposAlojamiento(data); // actualiza la informnación de tiposAlojamiento
        } else {
          console.error('Error al obtener los tipos de alojamiento.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAlojamientos(); // hace que useEffect se ejecute una sola vez
  }, []);

  const handleEditClick = (indiceTipo, descripcion) => {
    setEditIndice(indiceTipo); //establece editIndice con el valor del indice de la fila
    setEditDescripcion(descripcion); //establece editDescripcion con la descripcion actual de esa fila
  };

  //se inovoca cada vez que el valor de input cambia y actualiza editDescripcion con el valor nuevo
  const handleInputChange = (e) => {
    setEditDescripcion(e.target.value);
  };


  //se invoca cuando presionamos enter en el input, para pasar la nueva descripción
  const handleKeyDown = async (e, id) => {
    if (e.key === 'Enter') {
      try {
        const response = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Descripcion: editDescripcion })
        });
        if (response.ok) {
          setTiposAlojamiento((tiposActuales) =>
            tiposActuales.map((tipo) =>
              tipo.idTipoAlojamiento === id ? { ...tipo, Descripcion: editDescripcion } : tipo
            ) //método que crea un nuevo array. map itera cada elemento tipo del array tiposActuales
              //compara si el id del alojamiento coincide con el indice de la fila 
              //si es true sobreecribe la propiedad Descripción con editDescripción
              //es es false tipo queda con la descripción anterior
          );
          setEditIndice(null);
          setEditDescripcion("");
        } else {
          console.error('Error al editar la descripción.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="table-container">
      <h1>Tabla Tipos de Alojamiento</h1>

      <table>
        <thead> 
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Operación</th>
          </tr>
        </thead>

        <tbody>
          {tiposAlojamiento.map((tipo, indiceTipo) => (
            <tr key={tipo.idTipoAlojamiento}> 
              <td>{tipo.idTipoAlojamiento}</td>
              <td>
                {editIndice === indiceTipo ? (
                  <input
                    type="text"
                    value={editDescripcion}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDown(e, tipo.idTipoAlojamiento)}
                  />
                ) : (
                  tipo.Descripcion
                )}
              </td>
              <td>  
                <button onClick={() => handleEditClick(indiceTipo, tipo.Descripcion)}>Editar</button>
                <button>Eliminar</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};
export default EditTiposAlojamiento;