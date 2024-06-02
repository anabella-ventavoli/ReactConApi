import { Link } from 'react-router-dom'

export default function HeaderLinks() {

  return (
    <div className="header-links">
        <div className="logo">
          <Link to="/"><img src="/img/logo_sinb.png" alt="The Cozy Cone Alojamientos" /></Link>
        </div>
        <ul>
            <li><a href=""><img src="/img/phoneyellow.png" /><p>0810 205 2024</p></a></li>
            <li><a href=""><img src="/img/whatsapp.png" /><p>3455 123456</p></a></li>
            <li><a href=""><img src="/img/userpurple.png" /><p>Iniciar sesión</p></a></li>
            <li><a href=""><img src="/img/question-mark.png" /><p>Ayuda</p></a></li>
        </ul>
    </div>
  )
}
