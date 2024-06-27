import ListAlojamientos from "./ListAlojamientos";
import ListImagenes from "./ListImagenes";

const Imagenes = () => {
    const [alojamientos, setAlojamientos] = ListAlojamientos([])
    const [imagenes, setImagenes] = ListImagenes([])


  return (

    <div className="container">
        
        <div className="table-container">
        <h2>Editar imágenes</h2>
        <table>
            <thead>
                <tr>
                    <th>IdAlojamiento</th>
                    <th>Titulo</th>
                    <th>Ruta</th>
                </tr>
            </thead>
            <tbody>
                {alojamientos.map((alojamiento) => (
                    <tr key="alojamiento">
                       <td>{alojamiento.idAlojamiento}</td>
                       <td>{alojamiento.Titulo}</td>
                    {imagenes.map((imagen) => (
                        imagen.idAlojamiento === alojamiento.idAlojamiento ? 
                        <td key={imagen.idImagen}>{imagen.RutaArchivo}</td> : null
                    ))}
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Imagenes
