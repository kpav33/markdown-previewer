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

export default defaultText;
