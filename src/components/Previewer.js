import React from "react";

import Panel from "./Panel";

import marked from "marked";
import ReactHtmlParser from "html-react-parser";

function Previewer(props) {
  marked.setOptions({ breaks: true });
  let markdown = marked(props.text);

  return (
    <Panel
      fullScrView={props.fullScrEditor}
      changeFunction={props.changeFunction}
      fullScreen={props.fullScreen}
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
