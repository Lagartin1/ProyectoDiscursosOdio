import LogoFacultad from '../img/facultad_logo.png';
import LogoInformatica from '../img/informatica_logo.png';
import LogoUach from '../img/uach_logo.png';
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
        
        <a href="https://www.uach.cl/inicio-uach" target="_blank">
        <img src={LogoUach} width="150px" height="110px" alt="logo uach" />
        </a>

        <a href="https://ingenieria.uach.cl/" target="_blank">
        <img src={LogoFacultad} width="150px" height="110px" alt="logo facultad" />
        </a>

        <a href="http://informatica.uach.cl/" target="_blank">
        <img src={LogoInformatica} width="150px" height="110px" alt="logo informatica" />
        </a>

        <div>
            HateAlert © {new Date().getFullYear()}
        </div>
        </footer>
    );
}

export default Footer;