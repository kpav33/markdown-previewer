import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./container/Context";

import App from "./container/App";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
