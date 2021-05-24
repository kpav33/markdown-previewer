import React, { useState } from "react";

import defaultText from "../defaultText";

// Create Context
const Context = React.createContext();

function ContextProvider({ children }) {
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
    <Context.Provider
      value={{
        text,
        fullScr,
        fullScrEditor,
        fullScrPreview,
        fullScreenStyle,
        changeEditor,
        changePreview,
        handleChange,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
