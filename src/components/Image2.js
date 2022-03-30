import React from "react";

function Image2(props) {
  return (
    <div className="itm" style={{ background: "#8b4513", height: "41vh" }}>
      <img
        style={{
          width: "25vh",
          height: "35vh",
          padding: "3vh",
          boxShadow: "0.5vh 0.5vh 0.5vh"
        }}
        src={props.ele.strMealThumb}
        alt="img"
      ></img>
      <div className="flex-contsiner">
        <h1
          style={{
            width: "15vh",
            // height: "2vh",
            padding: "3vh",
            // boxShadow: "0.5vh 0.5vh 0.5vh",
            fontSize: "2.5vh",
            color: "white"
          }}
          className="title"
        >
          {props.ele.strMeal}
        </h1>
        <a
          style={{
            width: "15vh",
            padding: "1vh",
            // boxShadow: "0.5vh 0.5vh 0.5vh",
            color: "white"
          }}
          className="view-btn"
          href={props.ele.strSource}
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default Image2;
