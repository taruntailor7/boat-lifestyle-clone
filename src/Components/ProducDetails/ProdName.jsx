import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import ProdColors from "./ProdColors";
import PaymetDrawer from "./PaymetDrawer";

const ProdName = ({ bgColor, colors, setImge }) => {
  const [CountProd, setCountProd] = React.useState(1);
  // console.log(imgesData.img);
  console.log(setImge, "setImge");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <VStack w="full" h="full" pl={5} align="left">
      <Text
        fontSize="30px "
        fontWeight="700"
        justifyContent="flex-start"
        textAlign="left"
        mt={10}
      >
        boAt Wave Call | Bluetooth Calling Smartwatch with 1.69" HD Curved
        Display, 150+ Watch Faces, Heart Rate & SPO2 Monitoring
      </Text>
      <Box>
        <Text fontSize="13px" textAlign="left" textColor="gray">
          SMART WATCHES
        </Text>
      </Box>
      <HStack>
        <Box display="flex" align="left">
          <img
            src="https://img.icons8.com/ios-glyphs/15/E74C3C/star--v1.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/ios-glyphs/15/E74C3C/star--v1.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/ios-glyphs/15/E74C3C/star--v1.png"
            alt=""
          />
          <img
            src="https://img.icons8.com/ios-glyphs/15/E74C3C/star--v1.png"
            alt=""
          />

          <img
            src="https://img.icons8.com/ios-glyphs/15/E74C3C/star--v1.png"
            alt=""
          />
        </Box>
        <Text fontSize="16px" color="gray">
          5.0 | 22 Review
        </Text>
      </HStack>
      <HStack w="full" mt={4} h="full">
        <VStack w={377} mt={-230} align="left">
          <hr />
          <Box display="flex">
            <Text color="gray" textSize="16px" mt={1}>
              Color :
            </Text>
            <Text mt={1} textSize="16px" ml={2}>
              {bgColor}
            </Text>
          </Box>
          <Box display="flex" align="left" spacing="10px">
            <Box
              h={70}
              w={70}
              border="1px"
              borderColor="gray.200"
              cursor="pointer"
              onClick={() => setImge(colors[0])}
              mr={2}
            >
              <Image boxSize="full" borderRadius="4" src={colors[0]}></Image>
            </Box>
            <Box
              h={70}
              w={70}
              border="1px"
              borderColor="gray.200"
              cursor="pointer"
              onClick={() => setImge(colors[1])}
              mr={2}
            >
              <Image boxSize="full" borderRadius="4" src={colors[1]}></Image>
            </Box>
            <Box
              h={70}
              w={70}
              border="1px"
              borderColor="gray.200"
              cursor="pointer"
              onClick={() => setImge(colors[2])}
              mr={2}
            >
              <Image boxSize="full" borderRadius="4" src={colors[2]}></Image>
            </Box>
            <Box
              h={70}
              w={70}
              border="1px"
              borderColor="gray.200"
              cursor="pointer"
              onClick={() => setImge(colors[3])}
              mr={2}
            >
              <Image boxSize="full" borderRadius="4" src={colors[3]}></Image>
            </Box>
          </Box>
          <br />
          <hr />
        </VStack>
        <Box
          h={330}
          w={300}
          border="1px"
          borderColor="gray.300"
          borderRadius="20"
          style={{ backgroundColor: "#EFEFEF" }}
        >
          <HStack pl={2}>
            <Text fontSize="4xl" pl={4} mt={2} fontWeight="700" color="red">
              ₹1,799
            </Text>
            <Text as="del" fontSize="2xl" pt={3}>
              ₹7,999
            </Text>
          </HStack>
          <HStack pl={2} mt={1}>
            <Text fontSize="sm" fontWeight="700" color="green">
              You Save: ₹ 6,191 (77%)
            </Text>
            <Text fontSize="xs">Inclusive of all taxes</Text>
          </HStack>
          <HStack pl={2} p={2} mt={3} style={{ backgroundColor: "#DCDCDC" }}>
            <Text fontSize="sm" fontWeight="700" color="green">
              IN STOCK
            </Text>
            <Text fontSize="xs" textAlign={"right"} pl={20}>
              Current in 72 Carts
            </Text>
          </HStack>
          <Box border="1px" w={20} h={30} mt={5} ml={3} display="flex">
            <MinusIcon
              w={3}
              h={3}
              ml={2}
              mt={2}
              _disabled={CountProd === 1}
              onClick={() => {
                if (CountProd > 1) {
                  setCountProd(CountProd - 1);
                }
              }}
            />
            <Text ml={3} color="red" fontWeight="800">
              {CountProd}
            </Text>
            <AddIcon
              w={3}
              h={3}
              mt={2}
              ml={4}
              onClick={() => {
                setCountProd(CountProd + 1);
              }}
            />
          </Box>
          <Box w="full" mt={2} ml={-2} p={3} py={2}>
            <Button
              colorScheme="red"
              w="full"
              mt={2}
              m={2}
              mr={2}
              ref={btnRef}
              onClick={onOpen}
            >
              ADD TO CART
            </Button>
            <PaymetDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
            <Button
              w="full"
              mt={2}
              m={2}
              mr={2}
              border="2px"
              borderColor="red.500"
              color="red"
            >
              BUY NOW
            </Button>
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
};

export default ProdName;
