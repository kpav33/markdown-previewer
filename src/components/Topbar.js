import React from "react";

function Topbar(props) {
  return (
    <div className="topbar">
      <div className="title">
        <i class={props.icon}></i>
        {props.title}
      </div>
      <button onClick={props.changeFunction}>
        {props.fullScreen ? (
          <i class="ri-fullscreen-exit-line"></i>
        ) : (
          <i class="ri-fullscreen-line"></i>
        )}
      </button>
    </div>
  );
}

export default Topbar;
