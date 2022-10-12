import React from "react";
import {
  Accordion,
  Box,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProdFaq from "./ProdFaq";
// import {
//     Accordion,
//     AccordionButton,
//     AccordionIcon,
//     AccordionItem,
//     AccordionPanel,
//     Box,
//   } from "@chakra-ui/react";
const svg = [
  {
    src: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-1b.png?v=1654855622",
    text: "1 Year Warranty",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-3b.png?v=1654855622",
    text: "7 Days Replacement",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-2b.png?v=1654855622",
    text: "Free Shipping",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-4b.png?v=1654855622",
    text: "Security Chekout",
  },
];

const faqs = [
  {
    question: "Q. What is the warranty period for boAt products?",
    ans: "All boAt products come with a 1-year warranty. For more details, please refer to our Warranty Policy.",
  },
  {
    question: "Q. Does it come with Media controls?",
    ans: "Yes, it comes with media controls.",
  },
  {
    question: "Q. Does it have a heart rate monitor?",
    ans: "Yes, it has a heart rate monitor.",
  },
  {
    question: "Q. Does it have a SpO2 monitor?",
    ans: "Yes, it has a SpO2 monitor.",
  },
  {
    question: "Q. Does it have a sleep monitor?",
    ans: "Yes, it has a sleep monitor.",
  },
  {
    question: "Q. Does it have a sedentary reminder?",
    ans: "Yes, it has a sedentary reminder.",
  },
  {
    question: "Q. Does it have a hydration reminder?",
    ans: "Yes, it has a hydration reminder.",
  },
  {
    question: "Q. Does it have a call reject feature?",
    ans: "Yes, it has a call reject feature.",
  },
];
const ProductDisc = () => {
  return (
    <>
      <HStack w="full" h="70px" spacing="5%" justifyContent="center">
        {svg.map((item) => (
          <HStack>
            <Image src={item.src} w="50px" h="50px"></Image>
            <Text>{item.text}</Text>
          </HStack>
        ))}
      </HStack>
      <HStack
        w="full"
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
      <VStack w="full" h="300px" justifyContent="center">
        <Text fontSize="48px" fontWeight="700">
          Wave Call - Best Bluetooth Calling Smartwatch for Everyone
        </Text>
        <Text fontSize="15px" px="50px">
          Make way for boAt Wave Call! A smart watch built to help you on your
          journey to becoming the best version of yourself. With our Bluetooth
          calling feature, you can stay connected with your loved ones while on
          the go. The 1.69" HD curved display gives you a clear view of every
          health insight as you get unstoppable with 10 days of battery life.
          Packed with a heart-rate & SpO2 monitor, sedentary & hydration alerts,
          and more, boAt Wave Call is the perfect companion for anyone looking
          to create their own path to wellness.
        </Text>
      </VStack>
      <HStack w="full" h="470px" border="1px" backgroundColor="black">
        <VStack
          w="50%"
          h="full"
          justifyContent="center"
          align="left"
          spacing="10px"
          pl="30px"
        >
          <Text fontSize="30px" fontWeight="700" color="white" textAlign="left">
            All Things Bright
          </Text>
          <Text fontSize="15px" color="White" textAlign="left">
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
      </HStack>
      <VStack w="full" h="400px" mt={5}>
        <Box w="800px">
          <Text
            fontSize="30px"
            fontWeight="800"
            color="black"
            textAlign="left"
            pl={2}
          >
            FAQs
          </Text>
        </Box>
        <Accordion allowToggle w="800px">
          {faqs.map((items) => (
            <ProdFaq ans={items.ans} question={items.question} />
          ))}
        </Accordion>
      </VStack>
      {/* <VStack border="1px" w="full" h="700px" mt={5}>
        <Box border="1px" w="900px">
          <Text fontSize="30px" fontWeight="800" textAlign="left">
            what boAtheads are saying:
          </Text>
        </Box>
        <Input></Input>
      </VStack> */}
    </>
  );
};

export default ProductDisc;
