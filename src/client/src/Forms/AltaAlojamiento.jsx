import { useNavigate } from 'react-router-dom';
import ListTipos from '../pages/ListTipos';
import ListServicios from '../pages/ListServicios';
import './forms.css';
import createAlojamiento from '../pages/CreateAlojamiento'; 

const AltaAlojamiento = () => {
  const navigate = useNavigate();

  const handleAltaButton = async (event) => {
    event.preventDefault();  // hace que no se recargue la pag

    const titulo = document.getElementById('inputTitle').value;
    const descripcion = document.getElementById('inputDescription').value;
    const tipoSeleccionado = document.getElementById('type').value;
    const latitud = document.getElementById('inputLatitud').value;
    const longitud = document.getElementById('inputLongitud').value;
    const dormitorios = document.getElementById('inputBed').value;
    const banios = document.getElementById('inputBath').value;
    const precio = document.getElementById('inputPrice').value;
    const radios = document.getElementsByName('available');
    let radioSeleccionado = "";
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radioSeleccionado = radios[i].value;
        break;
      }
    }

    const nuevoAlojamiento = {
      "Titulo": titulo,
      "Descripcion": descripcion,
      "TipoAlojamiento": tipoSeleccionado,
      "Latitud": parseFloat(latitud),
      "Longitud": parseFloat(longitud),
      "PrecioPorDia": parseFloat(precio),
      "CantidadDormitorios": parseInt(dormitorios),
      "CantidadBanios": parseInt(banios),
      "Estado": radioSeleccionado
   };

    const success = await createAlojamiento(nuevoAlojamiento);

    if (success) {
      navigate('/alojamientodetalle'); // Redireccionarme a esta pag
    } else {
      console.error("Error al crear el alojamiento");
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2>Alta alojamiento</h2>
        <form onSubmit={handleAltaButton}>
          <div className="column-container">
            <div className="column">
              <label htmlFor="inputTitle">Título</label>
              <input type="text" id="inputTitle" placeholder="El título identifica al alojamiento" required />
              <div className="div-container">
                <label htmlFor="type">Tipo Alojamiento</label>
                <select id="type" required>
                  {ListTipos().map(tipo => (
                    <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>{tipo.Descripcion}</option>
                  ))}
                </select>
              </div>
              <div className="div-container">
                <label htmlFor="inputLatitud">Latitud</label>
                <input type="text" id="inputLatitud" placeholder="Ingrese la latitud" required />
              </div>
              <div className="div-container">
                <label htmlFor="inputLongitud">Longitud</label>
                <input type="text" id="inputLongitud" placeholder="Ingrese la longitud" required />
              </div>
              <div className="div-container">
                <label htmlFor="inputBed">Cantidad de Dormitorios</label>
                <input type="number" id="inputBed" required />
              </div>
              <div className="div-container">
                <label htmlFor="inputBath">Cantidad de Baños</label>
                <input type="number" id="inputBath" required />
              </div>
              <div className="div-container">
                <label htmlFor="inputPictures">Subir imágenes</label>
                <input type="file" id="inputPictures" name="file" />
              </div>
            </div>

            <div className="column">
              <div className="desc">
                <label htmlFor="inputDescription">Descripción</label>
                <textarea id="inputDescription" type="text" maxLength="300" placeholder="Describa el alojamiento aquí" required autoComplete="off" autoFocus />
              </div>
              <div>
                <label>Servicios</label>
                <div className="radio-container">
                  {ListServicios().map(servicio => (
                    <label key={servicio.idServicio}>{servicio.Nombre}
                      <input type="checkbox" value={servicio.idServicio} />
                    </label>
                  ))}
                </div>
              </div>

              <div className="div-container">
                <label htmlFor="inputPrice">Precio por día</label>
                <input id="inputPrice" placeholder="Ingrese el precio por dia" required />
              </div>

              <label>Disponible</label>
              <div className="radio-container">
                <label htmlFor="si">SI
                  <input type="radio" id="si" name="available" value='Disponible' required />
                </label>
                <label htmlFor="no">NO
                  <input type="radio" id="no" name="available" value='Reservado' required />
                </label>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Dar de alta</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AltaAlojamiento;
