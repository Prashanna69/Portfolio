import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const backgroundColor = {
  default: {
    backgroundColor: "#331D2C",
  },
};

const theme = extendTheme({ backgroundColor });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
