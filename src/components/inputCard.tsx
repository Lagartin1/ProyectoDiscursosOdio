import React from 'react'
import "../styles/inputCard.css"
import { Stack, Radio, RadioGroup, Input,FormControl, FormLabel} from '@chakra-ui/react'

function InputCard() {
    const [value, setValue] = React.useState('');
    const [urlSend,setUrlSend] = React.useState('');
    const [palabras,setPalabras] = React.useState('');

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrlSend(event.target.value);
    };

    const handelChangeP = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPalabras(event.target.value)
    };

    const handelClickS = () => {
        if ((value === null || value === '') && (urlSend === null || urlSend === '')){
            return;
        }
        if (palabras) {
            console.log(palabras);
        }
        console.log(urlSend);
    }

    return (
        <>
            <div className="inputCard">
                <FormControl label='InputControl' isRequired display={'flex'} flexDirection={'column'} alignContent={'center'} alignItems={'center'}>
                    <div className='inputField'>
                        <FormLabel id={'redInp'} color={'#fff'}>Selecciona red social</FormLabel>
                        <RadioGroup id={'redInp'} colorScheme={'red'} onChange={setValue} value={value}>
                            <Stack color={'#fff'} gap={'2rem'} className='menuR' direction='row'>
                                <Radio value='F'>Facebook</Radio>
                                <Radio value='I'>Instagram</Radio>
                                <Radio value='T'>Twitter (X)</Radio>
                            </Stack>
                        </RadioGroup>

                        <FormLabel id={'urlInp'} marginTop={'1rem'} color={'#fff'}>URL</FormLabel>
                        <Input id={'urlInp'} width={'50vw'} className='inputBox' value={urlSend} focusBorderColor={'#fff'} 
                            color={'#fff'} borderWidth={'2px' } 
                            borderColor='#4A5759' onChange={handelChange} size='md'
                            variant='outline' placeholder='Ingrese la URL...' />

{/** esta barra para ingresar palabras luego hay que eliminarla, ya que implementaremos una IA para que haga el trabajo
 */}
                        <FormLabel id={'palabInp'} marginTop={'1rem'} color={'#fff'}>Palabras claves (separadas por coma)</FormLabel>
                        <Input id={'palabInp'} width={'50vw'} className='inputBox' value={palabras} focusBorderColor={'#fff'} 
                            color={'#fff'} borderWidth={'2px' } 
                            borderColor='#4A5759' onChange={handelChangeP}  size='md'
                            variant='outline' placeholder='Ingrese palabras...' />


                        <button className='sendB' onClick={handelClickS}> Enviar</button>
                    </div>
                </FormControl>
            </div>
        </>
    )
}

export default InputCard;