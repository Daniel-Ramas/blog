import React from "react";

//components
import Date from "./Date";
import Title from "./Title";
import Body from "./Body";

//custom css
import "./Container.css";

const Container = (props) => {
  return (
    <div className="card">
      <div className="container">
        <div style={{ textAlign: "right" }}>
          <Date date={props.date} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Title title={props.title} />
        </div>
        <div style={{ textAlign: "justify" }}>
          <Body body={props.body} />
        </div>
      </div>
    </div>
  );
};
export default Container;
