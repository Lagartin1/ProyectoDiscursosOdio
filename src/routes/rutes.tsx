import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home';
// Falta implementar , rutas listas, solo creadas para no dar un warning y no compile
const Historial = ()=>{
    return(
      <h1> Historial</h1>
    )
  };
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