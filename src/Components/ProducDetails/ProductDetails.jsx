// import { Input } from "@chakra-ui/react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
// // use chakra ui
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
      <Box>
        <Box w={1300} h={50} color="#111111" fontWeight="300">
          <Text fontSize="13px" pt="15px" pl="10" textAlign="left">
            Home / boAt Wave Call | Bluetooth Calling Smartwatch with 1.69" HD
            Curved Display, 150+ Watch Faces, Heart Rate & SPO2 Monitoring
          </Text>
        </Box>
        <Box h={625} w="full" bg="#F5F5F5">
          <ProdImages
            imgesData={imgesData}
            bgColor={bgColor}
            img={img}
            setImge={setImge}
          />
          <Box h={625} w={700} float="right">
            <ProdName bgColor={bgColor} colors={colors} setImge={setImge} />
          </Box>
        </Box>
      </Box>
      <br />
      <ProductDisc />
    </>
  );
};

export default ProductDetails;
