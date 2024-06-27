import  { useState, useEffect } from 'react';
import './forms.css';

//pages
import DeleteAlojamiento from "../pages/DeleteAlojamiento";
import ListAlojamientos from '../pages/ListAlojamientos';
//agrego
import ListTipos from '../pages/ListTipos'

const EditAlojamientos = () => {
  const [tiposAlojamiento] = ListTipos([]) //agrego

  const [alojamientoEdit, setAlojamientoEdit] = useState({
    'idAlojamiento': 0,
    'Titulo': '',
    'PrecioPorDia': '',
    'Latitud': 0,
    'Longitud': 0,
    'CantidadDormitorios': 0,
    'CantidadBanios': 0,
    'TipoAlojamiento': 0,
    'Estado': ''
  });

  const [alojamientos, setAlojamientos] = ListAlojamientos();
  const [idSeleccionado, setIdSeleccionado] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [dormis, setDormis] = useState(0);
  const [banios, setBanios] = useState(0);
  const [tipoAloj, setTipoAloj] = useState(0);
  const [estado, setEstado] = useState("");
  

  const handleDelete = (id) => {
    setAlojamientos ((alojamientosActuales) =>
      alojamientosActuales.filter((alojamiento) => alojamiento.idAlojamiento !== id)
    );
  };
  
  const handleEditClick = (seleccionado) => {
    setIdSeleccionado(seleccionado.idAlojamiento);
    setTitulo(seleccionado.Titulo);
    setDescripcion(seleccionado.Descripcion);
    setPrecio(seleccionado.PrecioPorDia);
    setLatitud(seleccionado.Latitud);
    setLongitud(seleccionado.Longitud);
    setDormis(seleccionado.CantidadDormitorios);
    setBanios(seleccionado.CantidadBanios);
    setTipoAloj(seleccionado.TipoAlojamiento);
    setEstado(seleccionado.Estado);
  };

  useEffect(() => {
    const fetchSeleccionado = async () => {
      try {
        const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${idSeleccionado}`);
        if (response.ok) {
          const data = await response.json();
          setAlojamientoEdit(data);
        } else {
          console.error('Error al obtener el alojamiento:', response.status);
        }
      } catch (error) {
        console.error('Error al obtener el alojamiento:', error);
    }
  };

  fetchSeleccionado();
  }, [idSeleccionado]);

  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevoDescripcion, setNuevoDescripcion] = useState('');
  const [nuevoLatitud, setNuevoLatitud] = useState('');
  const [nuevoLongitud, setNuevoLongitud] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');
  const [nuevoDormis, setNuevoDormis] = useState('');
  const [nuevoBanios, setNuevoBanios] = useState('');
  const [nuevoTipoAloj, setNuevoTipoAloj] = useState('');
  const [nuevoEstado, setNuevoEstado] = useState('');


  const handleChange = (value, atributo) => {
    switch (atributo) {
      case 'titulo':
        setNuevoTitulo(value)
        break;
      case 'desc':
        setNuevoDescripcion(value)
        break;
      case 'lat':
          setNuevoLatitud(value)
        break;
      case 'long':
          setNuevoLongitud(value)
        break;
      case 'precio':
          setNuevoPrecio(value)
        break;
      case 'dormis':
          setNuevoDormis(value)
        break;
      case 'banios':
          setNuevoBanios(value)
        break;
      case 'tipoAloj':
          setNuevoTipoAloj(value)
        break;
      case 'estado':
          setNuevoEstado(value)
        break;
      default:
        break;
    }
  };

  const handleActualizar = async (id) => {
    const nuevoAlojamiento = {};
  
    if (nuevoTitulo !== '') nuevoAlojamiento.Titulo = nuevoTitulo;
    if (nuevoDescripcion !== '') nuevoAlojamiento.Descripcion = nuevoDescripcion;
    if (nuevoPrecio !== '') nuevoAlojamiento.PrecioPorDia = nuevoPrecio;
    if (nuevoLongitud !== '') nuevoAlojamiento.Longitud = nuevoLongitud;
    if (nuevoLatitud !== '') nuevoAlojamiento.Latitud = nuevoLatitud;
    if (nuevoDormis !== '') nuevoAlojamiento.CantidadDormitorios = nuevoDormis;
    if (nuevoBanios !== '') nuevoAlojamiento.CantidadBanios = nuevoBanios;
    if (nuevoEstado !== '') nuevoAlojamiento.Estado = nuevoEstado;
    
    tiposAlojamiento.forEach(tipo => {
      if (nuevoTipoAloj.toLowerCase() === tipo.Descripcion) {
        nuevoAlojamiento.TipoAlojamiento = nuevoTipoAloj.toLowerCase();
        nuevoAlojamiento.idTipoAlojamiento = tipo.idTipoAlojamiento }
    })

    console.log('Alojamiento actualizado:', nuevoAlojamiento); 
    try {
      const response = await fetch(`http://localhost:3001/alojamiento/putAlojamiento/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoAlojamiento)
      });
  
      if (response.ok) {
        alert("Alojamiento actualizado");
        setNuevoTitulo('');
        setNuevoDescripcion('');
        setNuevoLatitud('');
        setNuevoLongitud('');
        setNuevoPrecio('');
        setNuevoDormis('');
        setNuevoBanios('');
        setNuevoEstado('');
        setNuevoTipoAloj('');
        setTitulo('');
        setBanios('');
        setDescripcion('');
        setLatitud('');
        setLongitud('');
        setDormis('');
        setPrecio('');
        setEstado('');
        setTipoAloj('');

        //Actualizo lista de alojamientos luego de modificarlo
        const actualizarAlojamientos = alojamientos.map((alojamiento) =>
          alojamiento.idAlojamiento === idSeleccionado ? { ...alojamiento, ...nuevoAlojamiento }  : alojamiento
        );
        setAlojamientos(actualizarAlojamientos);
        setIdSeleccionado('');

      } else {
        alert("Error al actualizar el alojamiento.");
        console.log('Response status:', response.status);
        const errorData = await response.json();
        console.log('Error data:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al actualizar el alojamiento.');
    }
  };

  return (
    <div>
      <div className="container table-container">
      <h2>Editar un alojamiento</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Precio por día</th>
              <th>Dormitorios</th>
              <th>Baños</th>
              <th>Estado</th>
              <th>Tipo Alojamiento</th> 
              <th>Version</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{idSeleccionado}</td>
              <td>{titulo}</td>
              <td>{descripcion}</td>
              <td>{latitud}</td>
              <td>{longitud}</td>
              <td>{precio}</td>
              <td>{dormis}</td>
              <td>{banios}</td>
              <td>{estado}</td>
              <td>{tipoAloj}</td>
              <td>Original</td>
            </tr>
            <tr>
              <td>{idSeleccionado}</td>
              <td><input 
                    type="text" 
                    value={nuevoTitulo}
                    id="nuevoTitulo" 
                    onChange={(e) => handleChange(e.target.value, 'titulo')} /></td>
              <td><input 
                    type="text" 
                    value={nuevoDescripcion}
                    id="nuevoDescripcion" 
                    onChange={(e) => handleChange(e.target.value, 'desc')} /></td>
              <td><input 
                    type="number" 
                    value={nuevoLatitud}
                    id="nuevoLatitud" 
                    onChange={(e) => handleChange(e.target.value, 'lat')} /></td>
              <td><input 
                    type="number" 
                    value={nuevoLongitud}
                    id="nuevoLongitud" 
                    onChange={(e) => handleChange(e.target.value, 'long')} /></td>
              <td><input 
                    type="number" 
                    value={nuevoPrecio}
                    id="nuevoPrecioPorDia" 
                    onChange={(e) => handleChange(e.target.value, 'precio')} /></td>
              <td><input 
                    type="number" 
                    value={nuevoDormis}
                    id="nuevoCantidadDormitorios" 
                    onChange={(e) => handleChange(e.target.value, 'dormis')} /></td>
              <td><input 
                    type="number" 
                    value={nuevoBanios}
                    id="nuevoCantidadBanios" 
                    onChange={(e) => handleChange(e.target.value, 'banios')} /></td>
              <td><input 
                    type="text" 
                    value={nuevoEstado}
                    id="nuevoEstado" 
                    onChange={(e) => handleChange(e.target.value, 'estado')} /></td>
              <td>
                  <input
                    type="text" 
                    value={nuevoTipoAloj}
                    id="nuevoTipoAlojamiento" 
                    onChange={(e) => handleChange(e.target.value, 'tipoAloj')} /></td>
              <td><button onClick={() => handleActualizar(idSeleccionado)}>Actualizar</button></td>

            </tr>
          </tbody>
        </table>
        
      </div>

      <div className="container table-container">
        <h2>Lista Alojamientos</h2>
        <table>
          <thead> 
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Precio por día</th>
              <th>Dormitorios</th>
              <th>Baños</th>
              <th>Estado</th>
              <th>Tipo Alojamiento</th>     
              <th>Eliminar</th>
              <th>Editar</th>    
            </tr>
          </thead>

          <tbody>
            {alojamientos.map((alojamiento) => (
              <tr key={alojamiento.idAlojamiento}> 
                <td>{alojamiento.idAlojamiento}</td>
                <td>{alojamiento.Titulo}</td>
                <td>{alojamiento.Descripcion}</td>
                <td>{alojamiento.Latitud}</td>
                <td>{alojamiento.Longitud}</td>
                <td>{alojamiento.PrecioPorDia}</td>
                <td>{alojamiento.CantidadDormitorios}</td>
                <td>{alojamiento.CantidadBanios}</td>
                <td>{alojamiento.Estado}</td>
                <td>{alojamiento.TipoAlojamiento}</td>
                <td><DeleteAlojamiento id={alojamiento.idAlojamiento} onDelete={handleDelete} /></td>
                <td><button onClick={() => handleEditClick(alojamiento)}>Seleccionar</button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};
export default EditAlojamientos;