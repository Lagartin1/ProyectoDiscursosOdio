import { Link , CircularProgress, CircularProgressLabel,Tooltip } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import "../styles/card.css"

interface cardProps{
    url:string;
    porcentaje:number;
    fecha:string;

}
const card: React.FC<cardProps> = ({url,fecha,porcentaje}) => {
    return(
        <>
            <div className="card">
                <h3>Url:</h3>
                <Link flexDirection={'row'} flexGrow={0.5} href={url} isExternal>
                    Instgram <ExternalLinkIcon mx='2px' />
                </Link>
                <time dateTime={fecha}>{fecha}</time>
                <Tooltip label='Porcentaje de odio en comentarios'>
                    <div className='circleGrap'>
                        <CircularProgress color={'#219ebc'} value={porcentaje}>
                            <CircularProgressLabel >{porcentaje.toString()}%</CircularProgressLabel>
                        </CircularProgress>
                    </div>
                </Tooltip>
            </div>
        </>
    ); 
}
export default card