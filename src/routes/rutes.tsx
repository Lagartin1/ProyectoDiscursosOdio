import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Historial from '../pages/Historial';
import Login from '../pages/Login';
import About from '../pages/About';

function Rutas(){
    return (
        <div className='bodyDiv'>
          <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Historial' element={<Historial/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      );
}

export default Rutas;