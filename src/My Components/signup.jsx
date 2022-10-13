import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';
import { getAuth } from "firebase/auth";
import { Box, Input, Textarea,Button ,Text,useToast,
    Stack,
    VStack
} from '@chakra-ui/react';

import { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { Navigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_error, get_loading, get_suceess } from '../Redux App/action';

const InitState={
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    phone_number:""

}
const SignUp=()=>{

   const { loading , error , token  }=useSelector((state)=>state)
    const dispatch=useDispatch();
     const [values,setValues]=useState(InitState);
     const toast = useToast();
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value})
     }
    const [nav,setNav]=useState(false);
        
    const [show, setShow] = useState(false)
    const showClick= () => setShow(!show)
     
    if(nav){
     return  <Navigate to='/login' />
    }

     const handleClick=async(e)=>{
      
        e.preventDefault();
        dispatch( get_loading() );
        let res1=await fetch(' http://localhost:3000/users')
        let res2=await res1.json();
        let flag=false;
        res2.map((elem)=>{
         if(elem.email===values.email){
           flag=true;
         }
        })
        if(flag==false){
          let recaptcha=new RecaptchaVerifier('recaptcha-container', {}, auth);
          recaptcha.render();
          let number=`+91${values.phone_number}`
          signInWithPhoneNumber(auth,number,recaptcha).then(function(e){
            let code=prompt('enter opt');
            if(code==null) return;
            e.confirm(code).then(function(res){
              console.log(res.user,'user');        
                fetch(' http://localhost:3000/users',{
                  method:'POST',
                  body: JSON.stringify(values),
                  headers : {
                      'content-type': 'application/json'
                  }
                })
                dispatch(get_suceess(false));
                setNav(true);          //for navigation
              toast({                                // for sucess
                 title: 'Account created.',
                 description: "We've created your account for you.",
                 status: 'success',
                 duration: 4000,
                 isClosable: true,
               })
            }).catch((err)=>{
              dispatch(get_error())
              console.log(err)
               toast({
                title: "WRONG OTP",               //for wrong otp
                description: "Try Again",
                status: 'error',
                duration: 4000,
                isClosable: true,
          
              })
              setValues(InitState);
              return;
             })
          }).catch((err)=>{
            dispatch(get_error())
           console.log(err)
            toast({
             title: "Server Error",            // for server error
             description: "Something went wrong",
             status: 'error',
             duration: 4000,
             isClosable: true,
           })
           return;
          })
         console.log(values);
          }else{
           alert("user Already Exists !!")
           dispatch(get_error());
          }
        //  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        setValues(InitState);
      }


      // if(loading){
      //   return <h1>...loading...</h1>
      // }

      // if(error){
      //   return <h1>...error..</h1>
      // }

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
         
        />
             <Box width='100%' position='relative' >
                <MDBInput 
                width='100%'               
                 label="Password"
                id='typePassword'
                size='lg'
                name='password'
                type={show ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                maxLength='8'
                /> 
            <Button h='1.75rem' size='sm' right='2' top='2' position='absolute' onClick={showClick}>
            {show ? 'Hide' : 'Show'}
            </Button>
            </Box>
        <Box width='100%' id='recaptcha-container' ></Box>
        <Button width='100%' isLoading={loading}
          type='submit' height='60px' style={{ backgroundColor:"red", padding:"20px", textAlign:"center" }}
        variant="contained" color='#ffff' >CREATE ACCOUNT</Button>
       <Text fontSize='lg'>Already have an account <NavLink style={{ color:'red'}} className='hover-underline-animation' to='/login' >Login</NavLink> </Text>
        </Stack>
      </form>
    </Box>
  )
}
export default SignUp
