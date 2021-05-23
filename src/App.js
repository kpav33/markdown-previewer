// import "./App.css";
import "./styles.scss";
import React, { useState } from "react";

import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import defaultText from "./defaultText";

import marked from "marked";

function App() {
  const [text, setText] = useState(defaultText);
  const [fullScr, setFullScr] = useState(false);
  const [fullScrEditor, setFullScrEditor] = useState(false);
  const [fullScrPreview, setFullScrPreview] = useState(false);

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

  // Stores input into textarea to state
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  marked.setOptions({ breaks: true });
  let markdown = marked(text);

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
        handleChange={handleChange}
        text={text}
      />
    </div>
  );
}

export default App;
