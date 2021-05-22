// import "./App.css";
import "./styles.scss";
import React, { useState } from "react";

import marked from "marked";
import ReactHtmlParser from "html-react-parser";

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
  let test = marked(text);

  return (
    <div className="wrapper" style={fullScr ? fullScreenStyle : null}>
      <div
        id="edit"
        className="panel"
        style={{ display: fullScrPreview ? "none" : "grid" }}
      >
        <div className="topbar">
          <div className="title">
            <i class="ri-pencil-line"></i>
            Editor
          </div>
          <button onClick={changeEditor}>
            {fullScrEditor ? (
              <i class="ri-fullscreen-exit-line"></i>
            ) : (
              <i class="ri-fullscreen-line"></i>
            )}
          </button>
        </div>
        <textarea
          onChange={handleChange}
          value={text}
          id="editor"
          className="textarea"
        />
      </div>
      <div
        id="preview-panel"
        className="panel"
        style={{ display: fullScrEditor ? "none" : "grid" }}
      >
        <div className="topbar">
          <div className="title">
            <i class="ri-file-search-line"></i>Previewer
          </div>
          <button onClick={changePreview}>
            {fullScrPreview ? (
              <i class="ri-fullscreen-exit-line"></i>
            ) : (
              <i class="ri-fullscreen-line"></i>
            )}
          </button>
        </div>
        <div id="preview" className="preview">
          {ReactHtmlParser(test)}
        </div>
      </div>
    </div>
  );
}

const defaultText = `# Markdown Previewer

This project was built as part of **freeCodeCamp Front End Libraries Projects**.

You can see the source code for this project in the [project's GitHub repository](https://github.com/kpav33/markdown-previewer) and you can read the instructions for the project on the [freeCodeCamp project page](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).

I've used [marked](https://github.com/markedjs/marked) together with [html-react-parser](https://github.com/remarkablemark/html-react-parser) to complete this project.

# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus nisl leo, eget porttitor eros fermentum vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
>
>> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus nisl leo, eget porttitor eros fermentum vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
Another one. | Getting a bit long. | We should probably stop.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)
`;

export default App;
