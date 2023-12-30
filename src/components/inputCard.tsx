import React from 'react';
import { Stack, Radio, RadioGroup, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaLink } from 'react-icons/fa';
import "../styles/inputCard.css";

function InputCard() {
    const [value, setValue] = React.useState('');
    const [urlSend, setUrlSend] = React.useState('');
    const [palabras] = React.useState('');

    const handleChange = (event: React.SetStateAction<string>) => {
        setValue(event);
    };

    const handleChangeUrl = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUrlSend(event.target.value);
    };

    const handleClickSend = () => {
        if ((value === null || value === '') && (urlSend === null || urlSend === '')) {
            return;
        }
        if (palabras) {
            console.log(palabras);
        }
        console.log(urlSend);
    };

    return (
        <div className="inputCard">
            <FormControl label="InputControl" isRequired display={'flex'} flexDirection={'column'} alignContent={'center'} alignItems={'center'}>
                <div className='inputField'>
                    <RadioGroup colorScheme={'red'} onChange={handleChange} value={value}>
                        <Stack color={'#fff'} gap={'1rem'} className='menuR' direction='column' align='center'>
                            <FormLabel id={'redInp'} color={'#fff'}>Selecciona red social</FormLabel>
                            <Stack direction='row' align='center' spacing={5}>
                                <Radio value='F'>
                                    <FaFacebook size={30} />
                                </Radio>
                                <Radio value='I'>
                                    <FaInstagram size={30} />
                                </Radio>
                                <Radio value='T'>
                                    <FaTwitter size={30} />
                                </Radio>
                            </Stack>
                        </Stack>
                    </RadioGroup>

                    <Stack direction='row' alignItems='center' style={{ marginTop: '2rem' }}>
                        <FaLink size={25} color="#fff" style={{ marginRight: '2px' }} />
                        <Input
                            id={'urlInp'}
                            width={'40vw'}
                            className='inputBox'
                            value={urlSend}
                            focusBorderColor={'#fff'}
                            color={'#fff'}
                            borderWidth={'2px'}
                            _placeholder={{ opacity: '0.6', color: '#fff' }}
                            borderColor='#4A5759'
                            onChange={handleChangeUrl}
                            size='md'
                            variant='outline'
                            placeholder='Ingrese la URL...'
                        />
                    </Stack>

                    <button className='sendB' onClick={handleClickSend}>Enviar</button>
                </div>
            </FormControl>
        </div>
    );
}

export default InputCard;
