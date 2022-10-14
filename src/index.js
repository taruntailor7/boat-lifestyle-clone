import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BottomNavigationStyleConfig as BottomNavigation } from "chakra-ui-bottom-navigation";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
  components: {
    BottomNavigation,
  },
});

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
