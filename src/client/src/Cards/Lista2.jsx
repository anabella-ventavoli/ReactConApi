import { Alojamientos } from '../pages/ListAlojamientos.jsx';
import { datos } from "../Datos/Alojamientos.js";

export function Lista2() {
    const lista2 = datos.map((dato, index) =>
        <Alojamientos
            key = {index}
            imagen = {dato.imagen}
            nombre = {dato.Titulo}
            ubicacion = {dato.ubicacion}
            valor = {dato.PrecioPordia}
            url = {dato.url}
        />
    );
    return lista2;
  }

export default Lista2;