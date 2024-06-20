import ListTipos from '../pages/ListTipos';
import ListServicios from '../pages/ListServicios';
import './forms.css';

const AltaAlojamiento = () => {

  return (
    <div>
      <div className="form-container">
        <h2>Alta alojamiento</h2>
        <form>
            <div className="column-container">
             
              <div className="column">
                <label htmlFor="inputtitulo">Título</label>
                <input type="text" id="inputtitulo" placeholder="El título identifica al alojamiento" />
                <div className="div-container">
                  <label htmlFor="type">Tipo Alojamiento</label>
                  <select id="type">
                    {ListTipos().map(tipo => (
                      <option key={tipo.id} value={tipo.id}>{tipo.Descripcion}</option>
                    ))}
                  </select>
                </div>
                <div className="div-container">
                  <label label htmlFor="inputlatitud">Latitud</label>
                  <input type="text" id="inputlatitud" placeholder="Ingrese la latitud" />
                </div>
                <div className="div-container">
                  <label label htmlFor="inputlongitud">Longitud</label>
                  <input type="text" id="inputlongitud" placeholder="Ingrese la longitud" />
                </div>
                <div className="div-container">
                  <label htmlFor="bedrooms">Cantidad de Dormitorios</label>
                  <input type="number" id="bedrooms" />
                </div>
                <div className="div-container">
                  <label htmlFor="baños">Cantidad de Baños</label>
                  <input type="number" id="baños" />
                </div>
                <div className="div-container">
                  <label htmlFor="uploadpictures">Subir imágenes</label>
                  <input type="file" id="uploadpictures" name="file" onChange=""/>
                </div>
              </div>

              <div className="column">
                <div className="desc">
                  <label htmlFor="inputdescription">Descripción</label>
                  <textarea id="inputdescription" type="text" maxLength="300" placeholder="Describa el alojamiento aquí" required autoComplete="off" autoFocus />
                </div>
                <div>
                  <label>Servicios</label>
                  <div className="radio-container"> 
                    {ListServicios().map(servicio => (
                      <label key={servicio.idServicio}>{servicio.Nombre}<input type="checkbox" value={servicio.idServicio}/></label>
                    ) )}
                    
                  </div>
                </div>

                <div className="div-container">
                  <label htmlFor="precio">Precio por día</label>
                  <input type="text" id="precio" placeholder="Ingrese el precio por dia" />
                </div>

                <label>Disponible</label>
                <div className="radio-container">
                  <label htmlFor="si">SI<input type="radio" id="si" name="available"/></label>  
                  <label htmlFor="no">NO<input type="radio" id="no" name="available"/></label>  
                </div>

              </div>
            </div>                              
            <div className="button-container">
              <button type="submit">Dar de alta</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AltaAlojamiento
