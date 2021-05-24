import React, { useContext } from "react";
import { Context } from "../container/Context";

import Panel from "./Panel";

function Editor() {
  const { fullScrPreview, changeEditor, fullScrEditor, handleChange, text } =
    useContext(Context);

  return (
    <Panel
      fullScrView={fullScrPreview}
      changeFunction={changeEditor}
      fullScreen={fullScrEditor}
      icon="ri-pencil-line"
      title="Editor"
    >
      <textarea
        onChange={handleChange}
        value={text}
        id="editor"
        className="textarea"
      />
    </Panel>
  );
}

export default Editor;
