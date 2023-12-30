import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import "../styles/LogOut.css"


function LogoutCard(){
    const toast = useToast();
    const navigate = useNavigate();

    const handelLogout= () => {
        sessionStorage.removeItem('isLoggedIn');
        navigate('/Login') // aqui no se porque cuando se cliquea el boton de cerrar sesion no vuelve al login
        toast({
            title: 'Cierre de sesión exitoso.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    }
    return(
        <>
        <div className="logoutcard">
                <div className="wrapperLogOut">
                    <h1 className='logoutT'>
                        Ya está en una sesión
                    </h1>
                    <button 
                        className='LoB'
                        onClick={handelLogout}> 
                        Cerrar sesión
                    </button>
                </div>

        </div>
        </>
    )
}
export default LogoutCard;