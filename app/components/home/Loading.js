import React from "react";
import "/app/globals.css";

function Loading() {
  return (
    <div className="LoadingContainer flex justify-center overflow-hidden mx-auto">
      <div className="loading loading01">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
}

export default Loading;
