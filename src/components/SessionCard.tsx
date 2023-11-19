import React from 'react';
import {FormControl, useToast ,FormLabel,Input} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"

function SessionCard(){
    const toast = useToast();
    const [Usuario, setUser] = React.useState('');
    const [Password,setPass] = React.useState('');
    const navigate = useNavigate();
    const handelChangeU = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    };
    const handelChangeP = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    };
    const handelClickLog = ()=>{
        const validSession = Usuario === 'usuario' && Password==='password';
        
        if(validSession){
            sessionStorage.setItem('isLoggedIn', 'true');
            navigate('/')
        }else{
            console.log("nav")
            toast({
                title:'Error',
                description:'wrong password or username',
                status: 'error',
                duration:9000,
                isClosable: true,
              })
        }
    }
    const handelClickSing = ()=>{

    }
return(
    <>
        <div className="logincard">
            <h1 className='loginT'>Log In / Sing Up</h1>
            <FormControl isRequired>
                <div className="wrapperLogin">
                    <div className='containerL'>
                        <FormLabel color={'#fff'}>Usuario</FormLabel>
                        <Input id={'user'}width={'50vw'} className='inputBox'value={Usuario} focusBorderColor={'#fff'} 
                        color={'#fff'} borderWidth={'1px' } 
                        borderColor='#4A5759' _placeholder={{opacity:'0.6',color:'#fff'}} onChange={handelChangeU}  size='md'
                        variant='outline' placeholder='Usuario' />
                    </div>
                    <div className='containerL'>
                        <FormLabel color={'#fff'}>Usuario</FormLabel>
                        <Input  id={'pass'}width={'50vw'} type='password' className='inputBox' value={Password} focusBorderColor={'#fff'} 
                        color={'#fff'}  borderWidth={'1px' } 
                        borderColor='#4A5759' onChange={handelChangeP}  size='md'
                        variant='outline' _placeholder={{opacity:'0.6',color:'#fff'}} placeholder='Password' />
                    </div>
                    <button className='logB' onClick={handelClickLog}> Login</button>
                    <button className='singB' onClick={handelClickSing}> Singup</button>
                </div>
            </FormControl>

        </div>
    </>
)
}
export default SessionCard