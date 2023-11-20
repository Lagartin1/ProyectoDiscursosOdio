import  {NavLink} from "react-router-dom"
import "../styles/headerBar.css"

function headerBar() {
    return( 
        <>
            <div className="Bar">
                <div className="title">
                    <h1>
                        Analizador de Discursos de Odio
                    </h1>
                </div>
                <nav className="navigatorButtons">
                    <ul>
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
                                }to="/Login" >Login</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    
    );
}

export default headerBar;