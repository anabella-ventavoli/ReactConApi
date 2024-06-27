import { useState} from "react";
//pages
import ListServicios from './ListServicios'
import DeleteServicios from './DeleteServicios'

const CreateServicio = () => {
  
  const [nombre, setNombre] = useState('');
  const [servicios, setServicios] = ListServicios([]);

  //Nuevo para editar
  const [editIndice, setEditIndice] = useState(null)
  const [editNombre, setEditNombre] = useState("")

  const handleEdit = (indiceServicio, nombre) => {        
    setEditIndice(indiceServicio);
    setEditNombre(nombre);
    console.log ("EL indice del servicio", nombre, "es", indiceServicio)
  };

  const handleInputChange = async (e) => {
    setEditNombre(e.target.value);
  };

  const handleKeyDown = async (e, id) => {
    if (e.key === 'Enter') {
      try {
        const response = await fetch(`http://localhost:3001/servicio/updateServicio/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
            },
          body: JSON.stringify({ Nombre: editNombre})
        });
        if (response.ok) {
          setServicios((serviciosActuales) => 
          serviciosActuales.map((servicio) => 
            servicio.idServicio === id ? { ...servicio, Nombre: editNombre } : servicio
          )
        );
        setEditIndice(null);
        setEditNombre("");
      } else {
        console.log("Error al actualizar nombre del servicio");
      }
    } catch (error) {
      console.log("Error:", error); }
    }
  }

  const handleAgregarButton = async (e) => {
    e.preventDefault();
    console.log(nombre, "antes de agregar al json")
    const nuevoServicio = {
      "Nombre": nombre.toLowerCase()
    };

    try {
      const response = await fetch('http://localhost:3001/servicio/createServicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoServicio)
        });
        if (response.ok) {
          console.log("Servicio agregado correctamente");
          setNombre('');
          setServicios([...servicios, nuevoServicio]);
        }
        else {
          console.log("Error al agregar servicio");
        }

      } catch (error) {
      console.log("Se produjo el error:",error);
    }
  }

  const handleDelete = (id) => {
    setServicios((serviciosActuales) => 
      serviciosActuales.filter((servicio) => servicio.idServicio !== id)
    );
  }

  return (
    <div className="container">
    <div className="column-container">
      <div className='column'>
        <h2>Crear Servicio</h2>
        <div className='form-createServicio'>
          <form id="createServicio" onSubmit={handleAgregarButton}>
            <label htmlFor="nombreServicio">Nombre del servicio:</label>
            <input 
                type="text" 
                id="nombreServicio" 
                placeholder="Ingrese palabra que identifica al servicio"
                value={nombre}
                name="nombreServicio" 
                onChange={(e) => setNombre (e.target.value)}/>
            <button type="submit">Agregar</button>
          </form>
        </div>
      </div>
        <div className="column">
          <h2>Servicios disponibles</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {servicios.map((servicio, indiceServicio) => (
                <tr key={indiceServicio}>
                  <td>
                    {editIndice === indiceServicio ? (
                      <input 
                        type="text"
                        value={editNombre}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleKeyDown(e, servicio.idServicio)}
                      />
                      ) : (
                        servicio.Nombre
                      )
                  }
                  </td>
          
                  <td>
                    <button onClick={() => handleEdit(indiceServicio, servicio.Nombre)}>Editar</button>
                    <DeleteServicios id={servicio.idServicio} onDelete={handleDelete} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
    </div>    
  );
};

export default CreateServicio;
