import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProdSpecification = () => {
  return (
    <>
      <HStack
        w={["550px", "420px", "full", "full"]}
        mt={[8, 8, 0, 0]}
        h="60px"
        border="1px"
        backgroundColor="black"
        color="gray"
        justifyContent="center"
        spacing="20%"
      >
        <Text
          fontSize="15px"
          fontWeight="extrabold"
          color="red"
          as="u"
          cursor="default"
        >
          DISCRIPTION
        </Text>
        <Text fontSize="15px" fontWeight="extrabold" cursor="pointer">
          SPECIFICATIONS
        </Text>
        <Text fontSize="15px" fontWeight="extrabold" cursor="pointer">
          REVIEWS
        </Text>
      </HStack>
      <Flex
        direction={["row", "row", "column", "column"]}
        w={["550px", "420px", "full", "full"]}
        h="300px"
        justifyContent="center"
        mt={["50px", 20, 0, 0]}
      >
        <Text fontSize={["20px", "30px", "48px", "48px"]} fontWeight="700">
          Wave Call - Best Bluetooth Calling Smartwatch for Everyone
        </Text>
        <Text fontSize="15px" px={["5px", "5px", "50px", "50px"]}>
          Make way for boAt Wave Call! A smart watch built to help you on your
          journey to becoming the best version of yourself. With our Bluetooth
          calling feature, you can stay connected with your loved ones while on
          the go. The 1.69" HD curved display gives you a clear view of every
          health insight as you get unstoppable with 10 days of battery life.
          Packed with a heart-rate & SpO2 monitor, sedentary & hydration alerts,
          and more, boAt Wave Call is the perfect companion for anyone looking
          to create their own path to wellness.
        </Text>
      </Flex>
      <Flex
        w={["550px", "420px", "full", "full"]}
        direction={["column", "column", "row", "row"]}
        // h={["800px", "800px", "470px", "470px"]}
        h="auto"
        border="1px"
        mb="auto"
        backgroundColor="black"
      >
        <VStack
          mb={[20, 20, 0, 0]}
          w={["550px", "420px", "full", "full"]}
          justifyContent="center"
          align="left"
          spacing="10px"
          pl="30px"
        >
          <Text
            fontSize="30px"
            fontWeight="700"
            color="white"
            textAlign="left"
            pt={[10, 10, 0, 0]}
          >
            All Things Bright
          </Text>
          <Text
            fontSize="15px"
            color="White"
            textAlign="left"
            justifyContent="center"
          >
            With its 1.69" HD curved display and 70% RGB colour gamut, get an
            enhanced colour resolution. Experience vivid and dynamic graphics
            with a 160-degree display and a sleek body. Moreover with 150+ watch
            faces, customize and personalise your boAt Wave Call according to
            your OOTD!
          </Text>
        </VStack>
        <Image
          h="100%"
          w="500px"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-5_1e1c266d-0efb-46d9-ad91-c2c26c5f352a.png?v=1658295658"
        ></Image>
      </Flex>
    </>
  );
};

export default ProdSpecification;
