import React from 'react'
import "../styles/Home.css"
import { Stack, Radio, RadioGroup, Input, Img,Box,FormControl, FormLabel} from '@chakra-ui/react'

function Home() {
    const [value, setValue] = React.useState('');
    const [urlSend,setUrlSend] = React.useState('');
    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrlSend(event.target.value);
    };
    const handelClickS=() =>{
        if ((value === null || value === '') && (urlSend === null || urlSend === '')){
            null
        }
        console.log(urlSend)
    }
    return( 
        <>
            <div className="inputCard">
                <FormControl isRequired display={'flex'} flexDirection={'column'} alignContent={'center'} alignItems={'center'}>
                    <div className='redSocial'>
                        <FormLabel color={'#fff'}>Seleccione Red Social</FormLabel>
                        <RadioGroup  colorScheme={'red'} onChange={setValue} value={value}>
                            <Stack  color={'#fff'} gap={'2rem'}className='menuR' direction='row'>
                                <Radio value='I'>Instagram</Radio>
                                <Radio value='T'>Twitter (X)</Radio>
                                <Radio value='F'>Facebook</Radio>
                            </Stack>
                        </RadioGroup>
                    </div>
                    <div className='inputField'>
                        <FormLabel color={'#fff'}>URL</FormLabel>
                        <Input width={'50vw'} className='inputBox'value={urlSend} focusBorderColor={'#fff'} 
                        color={'#fff'} _hover={{borderColor:'#006d77'}} borderWidth={'1px' } 
                        borderColor='#4A5759' onChange={handelChange}  size='md'
                        variant='outline' placeholder='Ingrese la URL...' />
                        <button className='sendB'onClick={handelClickS}> Enviar</button>
                    </div>
                </FormControl>
            </div>
            <section className="aboutApp">
                <div className="explanation">
                    <h1>Sobre nosotros</h1>
                    <p>
                    Bienvenido a la iniciativa del Instituto de Comunicación Social de la Universidad Austral de Chile
                    para abordar la problemática de los discursos de odio en las redes sociales. Este proyecto tiene
                    como objetivo desarrollar una plataforma especializada que permita la detección y análisis 
                    automatizado de discursos perjudiciales en entornos digitales.
                    </p>
                    <h1>Objetivo</h1>
                    <p>
                    Crear una herramienta avanzada que contribuya a la comprensión y mitigación de discursos de odio 
                    en línea, proporcionando datos precisos y análisis detallados.
                    </p>
                    <h1>Meta</h1>
                    <p>
                    Desarrollar una interfaz fácil de usar que permita a los investigadores del Instituto recopilar
                    información relevante de diversas redes sociales, identificar patrones de discursos de odio, y 
                    generar informes visuales que respalden la investigación académica y estrategias de comunicación 
                    social.

                    Al unir tecnología y análisis de datos, aspiramos a fortalecer la capacidad del Instituto para
                    abordar los desafíos contemporáneos de la comunicación en línea y fomentar un entorno digital más 
                    inclusivo y respetuoso.

                    ¡Explora nuestra plataforma y únete a nosotros en la lucha contra los discursos de odio en las redes
                    sociales!
                    </p>
               </div>
               <div className="others">
                <Box  height='450px'margin={'0.5rem 15rem 0.5rem'} borderRadius={'5rem'} overflow={'hidden'} bg='#B0C4B1;'>
                    <Img marginLeft={'1rem'} boxSize={'500px'}src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Pirámide_del_odio.svg' alt='Piramide De odio' />
                </Box>
               </div>

            </section>
        </>
    );
}

export default Home;