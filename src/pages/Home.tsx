import "../styles/Home.css"
import InputCard from '../components/inputCard';
import {Img} from '@chakra-ui/react'

function Home() {
    
    return( 
        <>
            <InputCard/>            
            <section className="aboutApp">
            <div className="others">
            <Img height={'500px'} margin={'4rem 5rem'}src={'https://ajuntament.barcelona.cat/bcnvsodi/wp-content/uploads/2018/05/Quimica-odi-ESP.jpg'}/>
            </div>

            </section>
        </>
    );
}

export default Home;