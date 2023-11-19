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
                        <FormLabel color={'#fff'}>Red social</FormLabel>
                        <RadioGroup  colorScheme={'red'} onChange={setValue} value={value}>
                            <Stack  color={'#fff'} gap={'2rem'}className='menuR' direction='row'>
                                <Radio value='I'>Instagram</Radio>
                                <Radio value='T'>Twitter (X)</Radio>
                                <Radio value='F'>Facebook</Radio>
                            </Stack>
                        </RadioGroup>
                    </div>
                    <div className='inputField'>
                        <FormLabel color={'#fff'}>Url</FormLabel>
                        <Input width={'50vw'} className='inputBox'value={urlSend} focusBorderColor={'#fff'} 
                        color={'#fff'} _hover={{borderColor:'#006d77'}} borderWidth={'1px' } 
                        borderColor='#4A5759' onChange={handelChange}  size='md'
                        variant='outline' placeholder='URL' />
                        <button className='sendB'onClick={handelClickS}> Send</button>
                    </div>
                </FormControl>
            </div>
            <section className="aboutApp">
               <div className="explanation">
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, aliquam arcu curabitur porta sagittis imperdiet, dapibus dui commodo proin aenean in.
                        Accumsan vulputate orci sed dui tempor feugiat in rutrum mi risus nisl, a himenaeos maecenas massa enim nec aliquet faucibus nibh scelerisque.
                        Auctor fermentum eu dapibus nec consequat inceptos facilisi accumsan arcu, fusce magna velit nascetur facilisis venenatis diam sollicitudin urna
                        vehicula, primis est leo cubilia curabitur justo vitae dui.
                    </p>
                    <p>
                        Sociis sapien pretium ligula ullamcorper eu aliquet vitae fermentum, magnis non per est diam mus cursus, donec sagittis condimentum fames ad quisque 
                        aenean. Tellus pulvinar nisi dui vitae eleifend penatibus purus iaculis, quisque porta felis convallis nunc ac praesent vulputate lacinia, rhoncus 
                        congue suspendisse vestibulum cursus varius neque. Platea et posuere purus venenatis vivamus habitant ante suspendisse ut congue cras leo, justo in 
                        nam tristique enim mauris inceptos diam massa felis litora.
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