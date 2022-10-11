//import React from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';
import { Box, Input, Textarea,Button ,Text,useToast,
    Stack,
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

     const [values,setValues]=useState(InitState);
     const toast = useToast();
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value})
     }


     const handleClick=(e)=>{
        e.preventDefault();
        console.log(values);
        // window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
         let recaptcha=new RecaptchaVerifier('recaptcha-container', {}, auth);
         recaptcha.render();
         let number=`+91${values.phone_number}`
         signInWithPhoneNumber(auth,number,recaptcha).then(function(e){
           let code=prompt('enter opt');
           if(code==null) return;
           e.confirm(code).then(function(res){
             console.log(res.user,'user');
             toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
           })
         }).catch((err)=>{
           toast({
            title: "OTP WRONG",
            description: "Try Again !!",
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
         })
       }

    return (

    <Box width={ {base:"90%", sm:"90%" , md:"60%",lg:"30%"} } margin='auto'>
    <Stack marginBottom='30px' >
       <Text fontSize='5xl'>Register</Text>
       <Text fontSize='xl'>Please fill in the fields </Text>
    </Stack>

         <form onSubmit={handleClick} >
            <Stack spacing="10px"  >
      <MDBInput
          label="First Name"
          size='lg'
          name='first_name'
          value={values.first_name}
          onChange={handleChange}
          required
        /> 
         <MDBInput
          label="Last Name"
          size='lg'
          name='last_name'
          value={values.last_name}
         onChange={handleChange}
         required  
        />
         <MDBInput
          label="Email"
          value={values.email}
          name='email'
         size='lg'
         id='typeEmail' type='email'
         onChange={handleChange}
         required
         
        />
        <MDBInput
          label="Phone Number"
          value={values.phone_number}
         size='lg'
         name='phone_number'
         id='typeNumber' type='number'
         onChange={handleChange}
         required
         maxLen='10'
         maxLength='10'
        />
        <Box position='relative' >
         <MDBInput
          label="Password"
          id='typePassword'
          size='lg'
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}
          maxLength='8'
        />
     <Box position='absolute' right='2' top='2' >  <NavLink  > <Text style={{ textUnderlinePosition:'under' }}>forgot password?</Text> </NavLink> </Box>  
        </Box>
        <Button width='100%'
          type='submit' height='60px' style={{ backgroundColor:"red", padding:"20px", textAlign:"center" }}
        variant="contained" color='#ffff' >CREATE ACCOUNT</Button>
       <Text fontSize='xs'>Already have an account <NavLink to='/login' >Login</NavLink> </Text>
        </Stack>
      </form>
    </Box>
  )
}

export default SignUp

