
import { useNavigate } from 'react-router-dom';
import "../styles/LogOut.css"

function LogoutCard(){
    const navigate = useNavigate();
    const handelLogout= () =>{
        sessionStorage.removeItem('isLoggedIn');
        navigate('/')
    }
    return(
        <>
        <div className="logoutcard">
                <div className="wrapperLogOut">
                    <h1 className='logoutT'>Usted Ya esta en una sesión</h1>
                    <button className='LoB' onClick={handelLogout}> Log Out</button>
                </div>

        </div>
        </>
    )
}
export default LogoutCard