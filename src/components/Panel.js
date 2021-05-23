import React from "react";

import Topbar from "./Topbar";

function Panel(props) {
  return (
    <div
      className="panel"
      style={{ display: props.fullScrView ? "none" : "grid" }}
    >
      <Topbar
        icon={props.icon}
        title={props.title}
        changeFunction={props.changeFunction}
        fullScreen={props.fullScreen}
      />
      {props.children}
    </div>
  );
}

export default Panel;
