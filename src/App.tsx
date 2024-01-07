
import HeaderBar from './components/headerBar';
import Routes from './routes/rutes';
import Footer from './components/footer';
import './styles/App.css';
import './styles/normalize.css';
import './styles/footer.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <HeaderBar />
      </header>
      
      <main>
        <Routes />
      </main>
      
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
