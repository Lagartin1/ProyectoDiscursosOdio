import HeaderBar from './components/headerBar'
import Rutas from './routes/rutes'
import './styles/App.css';
import './styles/normalize.css'


function App() {

  return (
    <>
    
      <header>
        <HeaderBar />
      </header>
      <Rutas/>
    </>
  )
}

export default App
