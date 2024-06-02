import './style.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import HeaderLinks from './Header/HeaderLinks';
import Cover from './Header/Cover';
import Nav from './Header/Nav';
import FooterRedes from './Footer/FooterRedes';
import FooterNav from './Footer/FooterNav';
import Copyright from './Footer/Copyright';
import TipoAlojamiento from './Forms/TipoAlojamiento'
import Nosotros from './Nosotros';
import Contacto from './Contacto';

function App() {
  
  return (
      
    <Router>
      <div className="App">
        <header>
          <HeaderLinks />
          <Cover />
          <Nav />
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administracion" element={<TipoAlojamiento />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <footer>
          <FooterRedes />
          <FooterNav />
          <Copyright />
        </footer>
      </div>
    </Router>

  );

}

export default App;
