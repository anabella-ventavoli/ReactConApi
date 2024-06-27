import ListAlojamientos from "../pages/ListAlojamientos";
import ListServicios from "../pages/ListServicios";
import PostServicios from "../pages/PostServicios";
//import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const ServicioAlojamiento = () => {

  const [alojamientos] = ListAlojamientos([]);
  const [servicios] = ListServicios([]);
  let serviciosChecked = [];
  

  const actualizar = async (e) => {
    e.preventDefault();
    const idAloj = document.getElementById('aloj').value;
    PostServicios(serviciosChecked, idAloj)
    }
    useNavigate('/alojamientodetalle/${idAloj}') 

  const handleOnServicio = (id) => {
    if (serviciosChecked.includes(id)) {
      serviciosChecked = serviciosChecked.filter(servicioId => servicioId !== id);
    } else {
      serviciosChecked.push(id);
    }
    console.log(serviciosChecked); 
  };
  

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="titleform">Cargar servicios</h2>
        <form onSubmit={actualizar}>
        <div>
          <label htmlFor="alojamiento">Alojamiento</label>
          <select id="aloj" required>
            {alojamientos.map(alojamiento => (
            <option key={alojamiento.idAlojamiento} value={alojamiento.idAlojamiento}>{alojamiento.Titulo}</option>
            ))}
          </select>
          <h2>Servicios</h2>
              <div className="radio-container">
                {servicios.map(servicio => (
                  <label htmlFor="serv" key={servicio.idServicio}>{servicio.Nombre}
                    <input 
                      id="serv" 
                      type="checkbox" 
                      value={servicio.idServicio} 
                      onClick={() => handleOnServicio(servicio.idServicio)}
                      />
                  </label>
                ))}
              </div>
        </div>
        <div className="button-container">
          <button type="submit">Actualizar</button>
        </div>
      </form>

      </div>    

    </div>
  )
}

export default ServicioAlojamiento
