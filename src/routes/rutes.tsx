import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Historial from '../pages/Historial';
// Falta implementar , rutas listas, solo creadas para no dar un warning y no compile
  const Pefil = ()=>{
    return(
      <h1> Perfil</h1>
    )
  };

function Rutas(){
    return (
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Historial' element={<Historial/>} />
            <Route path='/Perfil' element={<Pefil />} />
          </Routes>
        </>
      )

}

export default Rutas;