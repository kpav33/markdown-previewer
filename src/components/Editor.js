import React from "react";

import Panel from "./Panel";

function Editor(props) {
  return (
    <Panel
      fullScrView={props.fullScrPreview}
      changeFunction={props.changeFunction}
      fullScreen={props.fullScreen}
      icon="ri-pencil-line"
      title="Editor"
    >
      <textarea
        onChange={props.handleChange}
        value={props.text}
        id="editor"
        className="textarea"
      />
    </Panel>
  );
}

export default Editor;
