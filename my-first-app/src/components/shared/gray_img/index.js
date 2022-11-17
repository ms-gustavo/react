import React from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <img
      alt="a"
      className={props.gray ? "gray-img" : "color-img"}
      src={props.img_url}
    ></img>
  );
};

export default GrayImg;
