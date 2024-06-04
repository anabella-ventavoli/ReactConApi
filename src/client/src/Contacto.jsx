//import React from 'react'
import { Link } from 'react-router-dom'




const Contacto = () => {
  return (
    <div className="container">
      
      <div className="contactus">
        <h1>Contacto</h1>
        <hr/>
        <ul>
          <li>WhatsApp +54 9 3455 574796</li>
          <li>Nuestro Call Center 0800-555-4646</li>
          <li>Horario de atención: Lunes a Viernes de 08:00 a 20:00hs</li>
        </ul>
        <hr/>
        <p>Las preguntas frecuentes se encuentran en la sección <Link to="/faq">FAQs</Link>.</p>
        <p>Nos interesa conocer su opinión para brindarle un mejor servicio. En caso de sugerencias 
            o problemas con el sitio, deje su mensaje y un agente se comunicará con usted a la brevedad.</p>

      </div>
      
      <div className='form-container'>
        <form>
          <h2 className='titleform'>Información de contacto</h2>
            <div>
              <label id="lblApellido" htmlFor="txtApellido">Apellido/s *</label>
              <input id="txtApellido" name="apellido"  type="text" maxLength="50" placeholder="Ingresar" required autoComplete="off" autoFocus />
            </div>

            <div>
              <label id="lblNombre" htmlFor="txtNombre">Nombre/s *</label>
              <input id="txtNombre" name="nombre"  type="text" maxLength="50" placeholder="Ingresar" required autoComplete="off" autoFocus />
            </div>

            <div>
              <label id="lblMail" htmlFor="txtMail">Correo *</label>
              <input id="txtMail" name="mail"  type="text" maxLength="50" placeholder="Ingrese mail de contacto" required autoComplete="off" autoFocus />
            </div>

            <div>
              <label id="lblSubject" htmlFor="txtSubject">Asunto *</label>
              <input id="txtSubject" name="subject"  type="text" maxLength="35" placeholder="Ingrese el motivo del mensaje" required autoComplete="off" autoFocus />
            </div>

            <div className="mensaje">
              <label id="lblSms" htmlFor="txtSms">Mensaje *</label>
              <textarea id="txtSms" name="sms"  type="text" maxLength="300" placeholder="Ingrese el contenido del mensaje aquí" required autoComplete="off" autoFocus />
            </div>

            <p>* Campos obligatorios</p>

            <div className="button-container">
              <button type="submit">Enviar</button>
            </div>
  
        </form>
      </div>
       
    </div>
  )
}

export default Contacto
