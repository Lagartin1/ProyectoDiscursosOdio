import React, { useEffect } from 'react';
import { Box, FormControl, useToast, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LockIcon } from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa';
import '../styles/Login.css';

function SessionCard() {
    const toast = useToast();
    const [Usuario, setUser] = React.useState('');
    const [Password, setPass] = React.useState('');
    const [NuevoUsuario, setNuevoUsuario] = React.useState('');
    const [NuevaPassword, setNuevaPassword] = React.useState('');
    const [isRegistering, setIsRegistering] = React.useState(false); // Nuevo estado para el modo de registro
    const [isLoggedIn, setIsLoggedIn] = React.useState(false); // para inicio de session
    const [usersMap, setUsersMap] = React.useState(
        new Map([
            ['lcarcamo', '1234'],
            ['fcordova', '123'],
            ['colocolo', '33'],
        ])
    );
    const navigate = useNavigate();
    

    const handelChangeU = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    };

    const handelChangeP = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    };

    const handelChangeNuevoUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoUsuario(event.target.value);
    };

    const handelChangeNuevaPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNuevaPassword(event.target.value);
    };

    const handelClickLog = () => {
        const validSession = usersMap.get(Usuario) === Password;

        if (validSession) {
            // esto es para que se cambie el valor de iniciar sesion a true
            sessionStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true); // Actualiza el estado de inicio de sesión
            
            //navigate('/Home');
            toast({
                title: 'Inicio de sesión exitoso.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: 'Error: Usuario o contraseña incorrectos.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handelClickSing = () => {
        if (NuevoUsuario.trim() === '' || NuevaPassword.trim() === '') {
            toast({
                title: 'Error: El usuario o la contraseña no pueden estar vacíos.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } else if (usersMap.has(NuevoUsuario)) {
            toast({
                title: 'Error: El usuario ya existe.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } else {
            setUsersMap((prevUsersMap) => {
                const newMap = new Map(prevUsersMap);
                newMap.set(NuevoUsuario, NuevaPassword);
                return newMap;
            });

            toast({
                title: 'Registro exitoso.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setNuevoUsuario('');
            setNuevaPassword('');
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            isRegistering ? handelClickSing() : handelClickLog();
        }
    };

    const toggleRegisterMode = () => {
        setIsRegistering(!isRegistering);
        // Puedes restablecer los campos del formulario después de cambiar el modo
        setUser('');
        setPass('');
        setNuevoUsuario('');
        setNuevaPassword('');
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/Home');
        }
    }, [isLoggedIn, navigate]);
    

    return (
        <>
            <div className="logincard">
                <h1 className="loginT">¡Bienvenid@ a HateAlert!</h1>
                <FormControl isRequired>
                    <div className="wrapperLogin">
                        <div className="containerL">
                            <Box display="flex" alignItems="center">
                                <Box mr={2}>
                                    <FaUser color="#fff" size={20} />
                                </Box>
                                <Input
                                    id={'user'}
                                    width={'20vw'}
                                    value={isRegistering ? NuevoUsuario : Usuario}
                                    focusBorderColor={'#fff'}
                                    color={'#fff'}
                                    borderWidth={'2px'}
                                    borderColor='#4A5759'
                                    _placeholder={{ opacity: '0.6', color: '#fff' }}
                                    onChange={isRegistering ? handelChangeNuevoUsuario : handelChangeU}
                                    size='md'
                                    variant='outline'
                                    placeholder={isRegistering ? 'Nuevo usuario...' : 'Nombre de usuario...'}
                                    onKeyDown={handleKeyDown}
                                />
                            </Box>
                        </div>
                        <div className="containerL">
                            <Box display="flex" alignItems="center">
                                <Box mr={2}>
                                    <LockIcon color="#fff" boxSize={5} />
                                </Box>
                                <Input
                                    id={'pass'}
                                    width={'20vw'}
                                    type='password'
                                    value={isRegistering ? NuevaPassword : Password}
                                    focusBorderColor={'#fff'}
                                    color={'#fff'}
                                    borderWidth={'2px'}
                                    borderColor='#4A5759'
                                    onChange={isRegistering ? handelChangeNuevaPassword : handelChangeP}
                                    size='md'
                                    variant='outline'
                                    _placeholder={{ opacity: '0.6', color: '#fff' }}
                                    placeholder={isRegistering ? 'Nueva contraseña...' : 'Contraseña...'}
                                    onKeyDown={handleKeyDown}
                                />
                            </Box>
                        </div>
                        <button className='logB' onClick={isRegistering ? handelClickSing : handelClickLog}>
                            {isRegistering ? 'Registrarme' : 'Iniciar sesión'}
                        </button>
                        <button className='singB' onClick={toggleRegisterMode}>
                            {isRegistering ? 'Volver a inicio de sesión' : 'Crear cuenta nueva'}
                        </button>
                    </div>
                </FormControl>
            </div>
        </>
    );
}

export default SessionCard;
