import  {NavLink} from "react-router-dom"
import "../styles/headerBar.css"

function headerBar() {
    return( 
        <>
            <div className="Bar">
                <div className="title">
                    <h1>
                        Analizador de Discursos de odio
                    </h1>
                </div>
                <nav className="navigatorButtons">
                    <ul>
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                                }to="/" > Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                                }to="/Historial" >Historial</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive, isPending }) =>
                                  isPending ? "pending" : isActive ? "active" : ""
                                }to="/Perfil" >Perfil</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    
    );
}

export default headerBar;