import { useState } from "react"

const TipoAlojamiento = () => {

  const [descripcion, setDescripcion] = useState('')

  const enviar = async (e) => {
    e.preventDefault();
    const json = {
      Descripcion: descripcion
    };

    //conexion con la Api
    try {
      const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',   
        },
        body: JSON.stringify(json)
      });
      if (response.ok) {
        alert('Tipo de alojamiento creado con éxito.')
      }
      else {
        alert('Error al crear el tipo de alojamiento.')
      } 

    } catch (error){
      console.log("Se produjo el error:", error);
      alert ("No se pudo establecer el servicio.")
    }
  }

  return (
    <div className="form-container">
      <h2 className="titleform">Cargar nuevo tipo de alojamiento</h2>
      <form onSubmit={enviar}>
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <input 
            type='text'
            id='descripcion'
            placeholder="Ingrese palabra que dentifique a un nuevo tipo de alojamiento"
            value={descripcion}
            onChange={(e) => setDescripcion (e.target.value)}
          />
        </div>

        <div className="button-container">
          <button type="submit">Crear</button>
        </div>

      </form>
    </div>
    
  )
}

export default TipoAlojamiento;