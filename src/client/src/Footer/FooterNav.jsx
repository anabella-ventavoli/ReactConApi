import { Link } from 'react-router-dom'

const FooterNav = () => {
  return (
    <div className="footer-nav">
        <ul>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/politicas">Política de privacidad</Link></li>
          <li><Link to="/administracion">Registra tu alojamiento</Link></li>
          <li><Link to="/terminos">Términos y condiciones</Link></li>
        </ul>
    </div>
  )
}

export default FooterNav
