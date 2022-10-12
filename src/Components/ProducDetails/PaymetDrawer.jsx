import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";
import React from "react";

const PaymetDrawer = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>YOUR CART</DrawerHeader>

        <DrawerBody>
          <Box></Box>
        </DrawerBody>

        <Button colorScheme="red" w="96%" mt={2} m={2} mr={2} ref={btnRef}>
          CASH ON DELIVERY
        </Button>
        <Button
          w="96%"
          mt={2}
          m={2}
          mr={4}
          border="2px"
          borderColor="red.500"
          color="red"
        >
          PAY VIA OTHER CARDS
        </Button>
      </DrawerContent>
    </Drawer>
  );
};

export default PaymetDrawer;
