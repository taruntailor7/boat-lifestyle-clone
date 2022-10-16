import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import PaymetDrawer from "./PaymetDrawer";
import ProductsStars from "./ProductsStars";

const ProdName = ({ bgColor, colors, setImge }) => {
  const [CountProd, setCountProd] = React.useState(1);
  // console.log(imgesData.img);
  console.log(setImge, "setImge");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <VStack w="full" h="full" pl={5}>
        <Text
          fontSize="30px "
          fontWeight="700"
          justifyContent="flex-start"
          textAlign="left"
          w="full"
          ml={[36, 10, 5, 0]}
          mt={[-40, -28, -32, 10]}
        >
          boAt Wave Call | Bluetooth Calling Smartwatch with 1.69" HD Curved
          Display, 150+ Watch Faces, Heart Rate & SPO2 Monitoring
        </Text>
        <Box>
          <Text fontSize="13px" textAlign="left" textColor="gray">
            SMART WATCHES
          </Text>
        </Box>
        <Box>
          <Flex direction="row">
            <ProductsStars
              size={["28px", "24px", "20px", "16px"]}
              mtt={[8, 6, 2, 2]}
            />
            <Text
              fontSize={["28px", "24px", "20px", "16px"]}
              color="gray"
              mt={[8, 6, 2, 2]}
              ml={3}
            >
              5.0 | 22 Review
            </Text>
          </Flex>
        </Box>
        <Flex
          display="flex"
          direction={["column", "column", "column", "row"]}
          w="full"
          mt={4}
          h="full"
          ml={[8, 6, 2, 2]}
        >
          <VStack w={["full", "full", "full", 377]} align="left">
            <hr />
            <Box display="flex">
              <Text color="gray" textSize="16px" mt={1}>
                Colors :
              </Text>
            </Box>
            <Flex
              // display="flex"
              direction="row"
              // spacing={["35px", "30px", "20px", "10px"]}
            >
              <Box
                h={["100px", "150px", "120px", "90px"]}
                w={["100px", "150px", "120px", "90px"]}
                border="1px"
                borderColor="gray.200"
                cursor="pointer"
                onClick={() => setImge(colors[0])}
                ml={["50px", "100px", "100px", "0"]}
                mr={[8, 6, 4, 2]}
              >
                <Image boxSize="full" borderRadius="4" src={colors[0]}></Image>
              </Box>
              <Box
                h={["100px", "150px", "120px", "90px"]}
                w={["100px", "150px", "120px", "90px"]}
                border="1px"
                borderColor="gray.200"
                cursor="pointer"
                onClick={() => setImge(colors[1])}
                mr={[8, 6, 4, 2]}
              >
                <Image boxSize="full" borderRadius="4" src={colors[1]}></Image>
              </Box>
              <Box
                h={["100px", "150px", "120px", "90px"]}
                w={["100px", "150px", "120px", "90px"]}
                border="1px"
                borderColor="gray.200"
                cursor="pointer"
                onClick={() => setImge(colors[2])}
                mr={[8, 6, 4, 2]}
              >
                <Image boxSize="full" borderRadius="4" src={colors[2]}></Image>
              </Box>
              <Box
                h={["100px", "150px", "120px", "90px"]}
                w={["100px", "150px", "120px", "90px"]}
                border="1px"
                borderColor="gray.200"
                cursor="pointer"
                onClick={() => setImge(colors[3])}
                mr={[8, 6, 4, 2]}
              >
                <Image boxSize="full" borderRadius="4" src={colors[3]}></Image>
              </Box>
            </Flex>
            <br />
            <hr />
          </VStack>

          <Box
            h={["full", "full", "full", 330]}
            w={["90%", "90%", "90%", 300]}
            ml={["20px", "20px", "30px", 0]}
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
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProdName;
