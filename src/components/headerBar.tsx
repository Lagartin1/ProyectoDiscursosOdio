import  {NavLink} from "react-router-dom"
import "../styles/headerBar.css"

function headerBar() {
    return( 
        <>
            <div className="Bar">
                <div className="title">
                    <h1 title="Definición discurso de odio">
                        <a href="https://es.wikipedia.org/wiki/Discurso_de_odio">[ HateAlert ]</a>
                    </h1>
                </div>
                
                <nav className="navigatorButtons">
                    <ul>
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }to="/Login" > Acceso</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }to="/" > Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }to="/Historial" >Historial</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }to="/About" > Acerca de</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    
    );
}

export default headerBar;