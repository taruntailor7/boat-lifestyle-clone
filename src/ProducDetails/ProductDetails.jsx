// import { Input } from "@chakra-ui/react";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import ProdImages from "./ProdImages";
import ProdName from "./ProdName";
import ProductDisc from "./ProductDisc";
const ProductDetails = () => {
  const imgesData = [
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call--4_600x.png?v=1658295340s",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-FI-6.1_1200x.png?v=1662636050",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-FI-5.1_1200x.png?v=1662636050",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-FI-2.1_1200x.png?v=1662636050",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-FI-1_1200x.png?v=1662636050",
    },
  ];
  const [bgColor, stBgColor] = React.useState("black");
  const colors = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call--4_600x.png?v=1658295340",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-3_600x.png?v=1658295343",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-Copy_600x.png?v=1658306520",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-CG_600x.png?v=1662636050",
  ];
  const changeColor = (color) => {
    stBgColor(color);
  };
  const [img, setImg] = useState(imgesData[0].img);
  const setImge = (img) => {
    setImg(img);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Box w="full" h="auto">
        <Flex
          w={["550px", "420px", "full", "full"]}
          direction={["column", "column", "column", "row"]}
          bg="#F5F5F5"
        >
          <Box
            h={625}
            w="full"
            // border="1px"
            bg="#F5F5F5"
          >
            <ProdImages
              imgesData={imgesData}
              bgColor={bgColor}
              img={img}
              setImge={setImge}
            />
          </Box>
          <Box h={625} w={["550px", "420px", "full", "full"]}>
            <ProdName bgColor={bgColor} colors={colors} setImge={setImge} />
          </Box>
        </Flex>
        <br />
        <ProductDisc />
      </Box>
    </>
  );
};

export default ProductDetails;
