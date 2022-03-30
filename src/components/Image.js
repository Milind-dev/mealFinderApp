/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import image from "../styles/Image.css";
function Image(props) {
  // console.log(props.ele)
  return (
    <div className="itm">
      <img
        style={{
          width: "75vh",
          height: "15vh",
          padding: "3vh",
          boxShadow: "2vh 2vh 2vh"
        }}
        src={props.ele.strMealThumb}
        alt=""
      ></img>
      <div className="flex-contsiner">
        <h1
          style={{
            width: "35vh",
            padding: "3vh",
            boxShadow: "1vh 1vh 1vh",
            fontSize: "2vh"
          }}
          className="title"
        >
          {props.ele.strMeal}
        </h1>
        <a className="view-btn" href={props.ele.strSource} target="_blank">
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default Image;
