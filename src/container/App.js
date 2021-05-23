import "../styles.scss";
import React, { useState } from "react";

import Editor from "../components/Editor";
import Previewer from "../components/Previewer";
import defaultText from "../defaultText";

function App() {
  const [text, setText] = useState(defaultText);
  const [fullScr, setFullScr] = useState(false);
  const [fullScrEditor, setFullScrEditor] = useState(false);
  const [fullScrPreview, setFullScrPreview] = useState(false);

  // Styles to use when user wants to fullscreen one of the panels
  const fullScreenStyle = {
    gridTemplate: "1fr / 1fr",
  };

  // Handles full screen change and back to normal view for editor
  function changeEditor() {
    setFullScrEditor((prevState) => !prevState);
    setFullScr((prevState) => !prevState);
  }

  // Handles full screen change and back to normal view for preview
  function changePreview() {
    setFullScrPreview((prevState) => !prevState);
    setFullScr((prevState) => !prevState);
  }

  // Stores input from textarea to state
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  return (
    <div className="wrapper" style={fullScr ? fullScreenStyle : null}>
      <Editor
        fullScrPreview={fullScrPreview}
        changeFunction={changeEditor}
        fullScreen={fullScrEditor}
        handleChange={handleChange}
        text={text}
      />
      <Previewer
        fullScrEditor={fullScrEditor}
        changeFunction={changePreview}
        fullScreen={fullScrPreview}
        text={text}
      />
    </div>
  );
}

export default App;
