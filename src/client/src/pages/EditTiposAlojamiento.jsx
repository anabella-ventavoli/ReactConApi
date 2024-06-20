import { useState } from "react";
import UseFetchAlojamientos from "./UseFetchAlojamientos";
import DeleteTipoAlojamiento from "./DeleteTipoAlojamiento";

const EditTiposAlojamiento = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = UseFetchAlojamientos([]);
  const [editIndice, setEditIndice] = useState(null);
  const [editDescripcion, setEditDescripcion] = useState("");

  const handleEditClick = (indiceTipo, descripcion) => {
    setEditIndice(indiceTipo); 
    setEditDescripcion(descripcion); 
  };

  const handleInputChange = (e) => {
    setEditDescripcion(e.target.value);
  };

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
            ) 

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

  const handleDelete = (id) => {
    setTiposAlojamiento ((tiposActuales) =>
      tiposActuales.filter((tipo) => tipo.idTipoAlojamiento !== id)
    );
  };
  

  return (
    <div className="container table-container">
      <h2>Tipos de Alojamiento</h2>

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
                <DeleteTipoAlojamiento id={tipo.idTipoAlojamiento} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};
export default EditTiposAlojamiento;