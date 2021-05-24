import React, { useContext } from "react";
import { Context } from "../container/Context";

import Panel from "./Panel";

import marked from "marked";
import ReactHtmlParser from "html-react-parser";

function Previewer() {
  const { fullScrPreview, changePreview, fullScrEditor, text } =
    useContext(Context);

  marked.setOptions({ breaks: true });
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
        {ReactHtmlParser(markdown)}
      </div>
    </Panel>
  );
}

export default Previewer;
