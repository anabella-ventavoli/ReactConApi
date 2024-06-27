import { Alojamiento } from './Alojamiento.jsx';
//import { datos } from "../Datos/Alojamientos.js";
import ListAlojamientos from '../pages/ListAlojamientos.jsx'

export function Lista() {
    const [alojamientos] = ListAlojamientos();

    const lista = alojamientos.map((alojamiento, index) =>
        <Alojamiento
            key = {index}
            imagen = {alojamiento.imagen}
            descripcion = {alojamiento.Descripcion}
            nombre = {alojamiento.Titulo}
            ubicacion = {alojamiento.Latitud + " " + alojamiento.Longitud}
            valor = {alojamiento.PrecioPorDia}
            url = {alojamiento.url}
            idAlojamiento = {alojamiento.idAlojamiento}
        />
    );
    return lista;
  }

export default Lista; 