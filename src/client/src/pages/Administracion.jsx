import { useNavigate } from 'react-router-dom';

//pages
import EditTiposAlojamiento from '../Forms/EditTiposAlojamiento'

const Administracion = () => {

    const navigate = useNavigate();

  return (
    <div className="container">
        <div className="administracion">
            <div>
                <EditTiposAlojamiento />
            </div>
            <div className="orange-button">
                <button onClick={() => navigate('/AddTiposAlojamiento')}>Crear Tipo</button>
            </div>
            <div className='orange-button'>
                <button onClick={() => navigate('/editalojamientos')}>Administrar Alojamientos</button>
            </div>
        </div>
  </div>
  )
}

export default Administracion
