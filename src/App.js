import "./App.css";
import React, { useState } from "react";

import marked from "marked";
import ReactHtmlParser from "html-react-parser";

function App() {
  const [text, setText] = useState(defaultText);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  marked.setOptions({ breaks: true });
  let test = marked(text);

  return (
    <div id="wrapper">
      <div id="edit">
        <div className="topbar">
          <i class="ri-pencil-line"></i>Editor
        </div>
        <textarea onChange={handleChange} value={text} id="editor" />
      </div>
      <div id="preview-panel">
        <div className="topbar">
          <i class="ri-file-search-line"></i>Previewer
        </div>
        <div id="preview">{ReactHtmlParser(test)}</div>
      </div>
    </div>
  );
}

const defaultText = `
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
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
