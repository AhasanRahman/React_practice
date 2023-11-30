import React from "react";
import Header from "./header";

const About = (props) => {
  // console.log("props",props);
//   const { name, phone, city } = props.item;
  return (
    <div>
      <Header />
      <div
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid ",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>This is about page</h1>
        <p>all rights Reserved by..</p>
        Sync to video time
￼
55:57
NOW PLAYING
￼

        <ul>
          <li>Name: { props.item['name']}</li>
          <li>Phone: { props.item['phone']}</li>
          <li>City: {props.item['city']}</li>
        </ul>

      </div>
    </div>
  );
};

export default About;
