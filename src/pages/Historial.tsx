import Card from '../components/card'
import "../styles/Historial.css"
/*
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
*/

// lo comentado usa datos del log in , posible NO implentacion


function Historial() {
    /*
    const toast = useToast();
    const sValid = sessionStorage.getItem('isLoggedIn');*/
    return(
        <div className='bodyDiv'>
            <section className="infoH">
            { /*{!sValid ? 
                    <> 
                        {toast({
                            title:'Error',
                            description:'No haz iniciado sesión',
                            status: 'error',
                            duration:5000,
                            isClosable: true,
                        }) }
                        <Navigate to="/Login" replace={true} />
                    </> :
                    <>
            </>*/}
                        {/* hacer un map para renderizar segun lo entragdo por la api */}
                        <Card url="" fecha='dd-mm-yyyy' porcentaje={60}/>
                        <Card url="" fecha='dd-mm-yyyy' porcentaje={70}/>
                        <Card url="" fecha='dd-mm-yyyy' porcentaje={25}/>
                {/* </> }*/}

            </section>
        </div>
    )

}
export default Historial;