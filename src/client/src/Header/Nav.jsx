import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/administracion">Administración</Link></li>
                <li><Link to="/alpinas">Alpinas</Link></li>
                <li><Link to="/cabanias">Cabañas</Link></li>
                <li><Link to="/hoteles">Hoteles</Link></li>
                <li><Link to="/motorhomes">Motorhomes</Link></li>
                <li><Link to="/particulares">Particulares</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
            </ul>
        </nav>  
    </div>
  )
}

export default Nav
