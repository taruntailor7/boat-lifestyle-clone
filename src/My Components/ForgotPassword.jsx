import { Box, Button, Stack, Text ,useToast} from '@chakra-ui/react'
import { MDBInput } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_error, get_loading, get_suceess } from '../Redux App/action';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';


export default function ForgotPassword() {

    const [values,setValues]=useState({phone_number:""});
    const { loading , error , isAuth  }=useSelector((state)=>state)
    const toast = useToast();
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value})
    }
    const [nav,setNav]=useState(false);
    let id="";

    const handleSubmit=async(e)=>{
            dispatch( get_loading() );
            let res3=await fetch(' http://localhost:3000/users')
            let res4=await res3.json();
            let flag=false;
            res4.map((elem)=>{
             if(elem.phone_number===values.phone_number){
               flag=true;
               id=elem.id;
             }
            })
            if(flag){
                let recaptcha=new RecaptchaVerifier('recaptcha-container', {}, auth);
                recaptcha.render();
                let number=`+91${values.phone_number}`
                toast({                                // for sucess
                    title: 'OTP SENT',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  })
                signInWithPhoneNumber(auth,number,recaptcha).then(function(e){
                    let code=prompt('enter opt');
                    if(code==null) return;
                    e.confirm(code).then(function(res){
                      console.log(res.user,'user'); 
                        localStorage.setItem("id",id);
                        setNav(true);  
                        dispatch(get_suceess(false));        //for navigation
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
                      return;
                     })
                  })
            }else{
                dispatch(get_error());
                toast({
                    title: "Alert !!",               //for wrong otp
                    description: "Please Enter Valid Registered Phone Number",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                  })

            }
            setValues({phone_number:""});
    }

    if(nav){
        return <Navigate to='/change_password' ></Navigate>
    }

  return (
    <Box width={ {base:"90%", sm:"90%" , md:"60%",lg:"30%"} } margin='auto' >
        <Stack gap='1px'>
        <Text fontSize={ {base:"25px", sm:"30px" , md:'35px',lg:"4xl"} } > Recover Password </Text>
        <Text marginTop='15px' marginBottom='10px' >Please Enter Your Phone Number</Text>
        <MDBInput 
          label="Phone Number"
          value={values.phone}
          name='phone_number'
          size='lg'
          id='typeNumber' type='Number'
          onChange={handleChange}
          required
         />
         <Box id='recaptcha-container' ></Box>
         <Button width='100%' onClick={handleSubmit} isLoading={loading}
          type='submit' height='50px' style={{ backgroundColor:"red", padding:"20px", textAlign:"center" }}
        variant="contained" color='#ffff' >RECOVER</Button>
        </Stack>
    </Box>
  )
}
