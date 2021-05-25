import React, { useContext } from "react";
import { Context } from "../container/Context";

import Panel from "./Panel";

import marked from "marked";
import ReactHtmlParser from "html-react-parser";

function Previewer() {
  const { fullScrPreview, changePreview, fullScrEditor, text } =
    useContext(Context);

  // Adds <br> on a single line break
  marked.setOptions({ breaks: true });
  // Parse markdown from text input
  let markdown = marked(text);

  return (
    <Panel
      fullScrView={fullScrEditor}
      changeFunction={changePreview}
      fullScreen={fullScrPreview}
      icon="ri-file-search-line"
      title="Previewer"
    >
      <div id="preview" className="preview">
        {/* Convert HTML strings into React components*/}
        {ReactHtmlParser(markdown)}
      </div>
    </Panel>
  );
}

export default Previewer;
