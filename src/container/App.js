import "../styles.scss";
import React, { useContext } from "react";
import { Context } from "./Context";

import Editor from "../components/Editor";
import Previewer from "../components/Previewer";

function App() {
  const { fullScr, fullScreenStyle } = useContext(Context);

  return (
    <div className="wrapper" style={fullScr ? fullScreenStyle : null}>
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
