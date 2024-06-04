import './style.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import HeaderLinks from './Header/HeaderLinks';
import Cover from './Header/Cover';
import Nav from './Header/Nav';
import FooterRedes from './Footer/FooterRedes';
import FooterNav from './Footer/FooterNav';
import Copyright from './Footer/Copyright';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import ListTiposAlojamiento from './Forms/ListTiposAlojamiento';
import AddTiposAlojamiento from './Forms/AddTiposAlojamiento';
import EditTiposAlojamiento from './Forms/EditTiposAlojamiento';

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
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/addtiposalojamiento" element={<AddTiposAlojamiento />} />
            <Route path="/listtiposalojamiento" element={<ListTiposAlojamiento />} />
            <Route path="/edittiposalojamiento" element={<EditTiposAlojamiento/>} />
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
