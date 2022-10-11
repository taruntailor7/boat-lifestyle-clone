//import React from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';
import { Box, Input, Textarea,Button ,Text,useToast,
    InputGroup,  show,  Stack,InputRightElement,
    VStack
} from '@chakra-ui/react';

import { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const InitState={
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    phone_number:""

}
const SignUp=()=>{
    const [show, setShow] = useState(false)
    const showClick= () => setShow(!show)
     const [values,setValues]=useState(InitState);
     const toast = useToast();
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value})
     }


     const handleClick=(e)=>{
        e.preventDefault();
       }

    return (

    <Box width={ {base:"90%", sm:"90%" , md:"60%",lg:"30%"} } margin='auto'>
    <Stack marginBottom='30px' >
       <Text fontSize='5xl'>Login</Text>
    </Stack>
         <form onSubmit={handleClick} >
            <Stack spacing="10px"  >
         <MDBInput
          label="Email"
          value={values.email}
          name='email'
         size='lg'
         id='typeEmail' type='email'
         onChange={handleChange}
         required
         
        />
            <Box width='100%' position='relative' >
                <MDBInput 
                width='100%'               
                 label="Password"
                id='typePassword'
                size='lg'
                name='password'
                type={show ? 'text' : 'password'}
                // value={values.password}
                // onChange={handleChange}
                maxLength='8'
                /> 
            <Button h='1.75rem' size='sm' right='2' top='2' position='absolute' onClick={showClick}>
            {show ? 'Hide' : 'Show'}
            </Button>
            </Box>
        <Button 
          type='submit' height='50px' style={{ backgroundColor:"red", padding:"20px", textAlign:"center" }}
        variant="contained" color='#ffff' >LOGIN</Button>
       <Text fontSize='xs'>New Customer <NavLink to='/signup' >Create an account</NavLink> </Text>
        </Stack>
      </form>
    </Box>
  )
}

export default SignUp




{/*

  const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
<InputGroup  position='relative' >
<MDBInput 
 label="Password"
 id='typePassword'
 size='lg'
 name='password'
 type={show ? 'text' : 'password'}
// value={values.password}
// onChange={handleChange}
 maxLength='8'
/>
<InputRightElement position='absolute' width='4.5rem'>
<Button h='1.75rem' size='sm'  onClick={handleClick}>
 {show ? 'Hide' : 'Show'}
</Button>
</InputRightElement>
</InputGroup> */}