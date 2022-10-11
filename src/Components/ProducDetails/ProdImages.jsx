import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ProdImages = ({ imgesData, bgColor }) => {
  const [img, setImg] = useState(imgesData[0].img);

  console.log({ imgesData, bgColor });
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
              backgroundColor={bgColor}
              _hover={{ borderColor: "gray.900" }}
              onMouseOver={() => setImg(img)}
            >
              <Image boxSize="full" borderRadius="4" src={img}></Image>
            </Box>
          ))}
        </VStack>
        <Box h={400} w={400} mt={-60} borderRadius="20">
          <Image
            boxSize="400px"
            borderRadius="20"
            src={img}
            boxShadow="2xl"
            backgroundColor={bgColor}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default ProdImages;
