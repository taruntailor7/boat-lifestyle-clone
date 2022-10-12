import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ProdImages = ({ imgesData, img, setImge }) => {
  // console.log({ imgesData, bgColor, img });
  return (
    <Box pl={5} h={625} w={550} float="left">
      <HStack mt={10}>
        <VStack align="left" pl={2} mr={5} cursor="pointer">
          {imgesData.map(({ img }) => (
            <Box
              h={70}
              w={70}
              border="1px"
              borderColor="gray.200"
              _hover={{ borderColor: "gray.900" }}
              onMouseOver={() => setImge(img)}
            >
              <Image boxSize="full" borderRadius="4" src={img}></Image>
            </Box>
          ))}
        </VStack>
        <Box h={450} w={400} borderRadius="20">
          <Image boxSize="450px" borderRadius="20" src={img} boxShadow="2xl" />
        </Box>
      </HStack>
    </Box>
  );
};

export default ProdImages;
