import React  from 'react'
import {
    Modal,
   
    ModalContent,
    ModalHeader,
    
    ModalBody,
    ModalCloseButton,
    Box
  } from '@chakra-ui/react'
import {Button} from "@chakra-ui/react"
import { Mytab } from './Tab'

import { useDisclosure } from '@chakra-ui/react'
  export function ModalBox() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <Box >
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          
          <ModalContent style={{width:"700px" ,height:"850px" }}>
            <ModalHeader><Box sx={{height:"40px",backgroundColor:"#005bf2",margin:"-18px",marginLeft:"-25px",marginRight:"-25px"}}></Box>
                <Box sx={{display:"flex",gap:"290px",backgroundColor:"#005bf2",color:"white",margin:"0px",width:"112.5%",marginTop:"15px",marginLeft:"-25px",marginRight:"-25px",fontSize:"14px",marginBottom:"10px"}}>
                <Box style={{fontSize:"25px"}}>boAt</Box>
                <Box>English</Box>
            </Box></ModalHeader>
            <Box ><Mytab/></Box>
            <ModalCloseButton />
            <ModalBody>
             
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </Box>
    )
  }