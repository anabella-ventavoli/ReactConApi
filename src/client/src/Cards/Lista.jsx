import { Alojamiento } from './Alojamiento.jsx';
import { datos } from "../Datos/Alojamientos.js";

export function Lista() {
    const lista = datos.map((dato, index) =>
        <Alojamiento
            key = {index}
            imagen = {dato.imagen}
            nombre = {dato.nombre}
            ubicacion = {dato.ubicacion}
            valor = {dato.valor}
            url = {dato.url}
        />
    );
    return lista;
  }

export default Lista;