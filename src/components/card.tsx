import { Link, CircularProgress, CircularProgressLabel, IconButton } from '@chakra-ui/react';
import { ExternalLinkIcon, DeleteIcon } from '@chakra-ui/icons';
import '../styles/card.css';

interface CardProps {
    url: string;
    porcentaje: number;
    fecha: string;
}

const Card: React.FC<CardProps> = ({ url, fecha, porcentaje }) => {
    // si el odio es mayor a 60% pinta el circulito rojo
    const color = porcentaje >= 60 ? 'red' : '#219ebc';

    return (
        <>
            <div className="card">
                <h3>URL:</h3>
                <Link 
                    flexDirection={'row'}
                    flexGrow={0.6}
                    href={url}
                    isExternal
                >
                    Instagram <ExternalLinkIcon mx="2px" />
                </Link>
                <time dateTime={fecha}>{fecha}</time>
                <div className="circleGrap" style={{ position: 'relative' }}>
                    <CircularProgress color={color} value={porcentaje} marginLeft="0">
                        <CircularProgressLabel>{porcentaje.toString()}%</CircularProgressLabel>
                    </CircularProgress>
                    <IconButton
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        aria-label="Borrar"
                        style={{ position: 'absolute', right: '2px', top: '50%', transform: 'translateY(-50%)' }}
                        onClick={() => {
                            // Lógica para borrar el elemento
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Card;
