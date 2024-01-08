import SessionCard from '../components/SessionCard';
import LogoutCard from '../components/LogoutCard';


function Login() {
    const sValid = sessionStorage.getItem('isLoggedIn');

    return(
        <>
            {sValid ? <LogoutCard/> : <SessionCard></SessionCard>  }
            
        </>
    )
}
export default Login;