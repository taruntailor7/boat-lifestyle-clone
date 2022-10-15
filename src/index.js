import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from "react-redux";
import { store } from "./Redux App/store";
import AuthContextProvider from "./AuthContextProvider/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider> 
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
        <GoogleOAuthProvider clientId="329753716905-d2nbvmp8oij1h9bb17ahglleicodf9mm.apps.googleusercontent.com">
          <App />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </AuthContextProvider> 
);
