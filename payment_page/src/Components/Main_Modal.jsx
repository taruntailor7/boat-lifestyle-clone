import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box
  } from '@chakra-ui/react'

import { Alltabs } from './AllTabs'
import { MyAccordion } from './RightBox'
 export function MainModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent  maxW="1000px"  h='500px' borderRadius="10px">
            <ModalHeader> <Box><img style={{width:"60px"}} src="http://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_2_256x256_7343fcda-46a7-4e67-885d-1ad75a441106.png?v=1647426867" alt="logo"/></Box></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <Box style={{display:"flex",gap:"10px"}}>
                <Box style={{width:"55%"}}>
                   <Alltabs/>
                    </Box>      {/**for left box */}
                <Box style={{width:"45%",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                    
                    <MyAccordion/>
                    </Box>        {/**for right box */}
             </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
 
  