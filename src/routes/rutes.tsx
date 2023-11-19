import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Historial from '../pages/Historial';
import Login from '../pages/Login'

function Rutas(){
    return (
        <div className='bodyDiv'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Historial' element={<Historial/>} />
            <Route path='/Login' element={<Login />} />
          </Routes>
        </div>
      )

}

export default Rutas;