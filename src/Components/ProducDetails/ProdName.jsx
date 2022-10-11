import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Timer from "./Timer";

const ProdName = ({ imgesData, bgColor, colors, changeColor }) => {
  console.log(imgesData.img);
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
              backgroundColor={colors[0]}
              _hover={{ borderColor: "gray.900" }}
              onMouseOver={() => changeColor(colors[0])}
              mr={2}
            >
              <Image
                boxSize="full"
                borderRadius="4"
                src={imgesData.img}
              ></Image>
            </Box>
            <Box
              h={70}
              w={70}
              border="1px"
              borderColor="gray.200"
              backgroundColor={colors[1]}
              _hover={{ borderColor: "gray.900" }}
              onMouseOver={() => changeColor(colors[1])}
              mr={2}
            >
              <Image
                boxSize="full"
                borderRadius="4"
                src={imgesData.img}
              ></Image>
            </Box>
            <Box
              h={70}
              w={70}
              border="1px"
              borderColor="gray.200"
              backgroundColor={colors[2]}
              _hover={{ borderColor: "gray.900" }}
              onMouseOver={() => changeColor(colors[2])}
              mr={2}
            >
              <Image
                boxSize="full"
                borderRadius="4"
                src={imgesData.img}
              ></Image>
            </Box>
            <Box
              h={70}
              w={70}
              border="1px"
              borderColor="gray.200"
              backgroundColor={colors[3]}
              _hover={{ borderColor: "gray.900" }}
              onMouseOver={() => changeColor(colors[3])}
              mr={2}
            >
              <Image
                boxSize="full"
                borderRadius="4"
                src={imgesData.img}
              ></Image>
            </Box>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ProdName;
