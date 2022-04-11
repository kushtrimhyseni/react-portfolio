import React from "react";

const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "#DCE8F8",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export default ProgressBar;
