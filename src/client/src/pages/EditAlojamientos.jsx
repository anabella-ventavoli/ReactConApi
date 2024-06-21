import ListAlojamientos from "./ListAlojamientos";
import DeleteAlojamiento from "./DeleteAlojamiento";

const EditTiposAlojamiento = () => {
  const [alojamientos, setAlojamientos] = ListAlojamientos([]);


  const handleDelete = (id) => {
    setAlojamientos ((alojamientosActuales) =>
      alojamientosActuales.filter((alojamiento) => alojamiento.idAlojamiento !== id)
    );
  };
  

  return (
    <div className="container table-container">
      <h2>Alojamientos</h2>

      <table>

        <thead> 
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Precio por día</th>
            <th>Dormitorios</th>
            <th>Baños</th>
            <th>Estado</th>
            <th>Tipo Alojamiento</th>
            <th>Index</th>   
            <th>Operación</th>   
          </tr>
        </thead>

        <tbody>
          {alojamientos.map((atributo, index) => (
            <tr key={atributo.idAlojamiento}> 
              <td>{atributo.idAlojamiento}</td>
              <td>{atributo.Titulo}</td>
              <td>{atributo.Latitud}</td>
              <td>{atributo.Longitud}</td>
              <td>{atributo.PrecioPorDia}</td>
              <td>{atributo.CantidadDormitorios}</td>
              <td>{atributo.CantidadBanios}</td>
              <td>{atributo.Estado}</td>
              <td>{atributo.TipoAlojamiento}</td>
              <td>{index}</td>
              <td>  
                <button>Editar</button>
                <DeleteAlojamiento id={atributo.idAlojamiento} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};
export default EditTiposAlojamiento;