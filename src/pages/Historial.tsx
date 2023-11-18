
import Card from '../components/card'
import "../styles/Historial.css"

function Historial() {
    return(
        <body>
            {/* Este comentario está dentro del código JSX */}
            <section className="infoH">
                {/* hacer un map para renderizar segun lo entragdo por la api */}
                <Card url="" fecha='dd-mm-yyy' porcentaje={60}/>
                <Card url="" fecha='dd-mm-yyy' porcentaje={70}/>
                <Card url="" fecha='dd-mm-yyy' porcentaje={10}/>
            </section>
        </body>
    )

}
export default Historial