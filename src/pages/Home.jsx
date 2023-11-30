import React from "react";
import Header from "./header";
import { useRef } from "react";
import "./login.css";

const Home = () => {
  let myImg = useRef();
  const change = () => {
    myImg.current.src = "https://placehold.co/600x400?text=Hello\nWorld";
    myImg.current.setAttribute("height", "200px");
    myImg.current.setAttribute("width", "300px");
  };

  return (
    <div>
      <Header />
      <div className="hero" style={{}}>
        <div style={{ padding: "20px" }}>
          <h2
            style={{
              color: "#EC7063 ",
              fontSize: "35px",
              fontWeight: "bold",
              marginTop: "60px",
            }}
          >
            Best Destination Around The World
          </h2>
          <h1
            style={{
              fontSize: "60px",
              width: "640px",
              fontWeight: "bold",
              padding: "20px 0",
              color: "#17202A",
            }}
          >
            Travel, enjoy and live a new and full life
          </h1>
          <p>
            Travelling is the most perfect teacher of history. It opens before
            one a new vista of the glorious reality of the past. Travelling
            revitalises the memory of the old thing and makes the study of
            history truly enjoyable. The view of the Taj or Ajanta teaches a
            traveller about the mighty art of ancient India.
          </p>
        </div>
        <div style={{ padding: "20px" }}>
          <img
            style={{ width: "90%", height: "auto", borderRadius: "15px" }}
            src={require("./solo-travel.jpg")}
            alt=""
          />

          {/* <img ref={myImg} src="https://placehold.co/600x400/png"/>
          <button onClick={change}>Click</button> */}
          {/* <img src="logo512.png" /> */}
        </div>

        <div className="container">
          <div className="header">Sign Up </div>
          <div className="underline"></div>
          <div className="inputs">
            <div className="input">
              <img src="icons8-user-24.png" alt="" />
              <input type="text" placeholder="Name" />
            </div>

            <div className="input">
              <img src="icons8-email-24.png" alt="" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input">
              <img src="icons8-password-24.png " alt="" />
              <input type="text" placeholder="Password" />
            </div>
          </div>
          <div className="forgot-pass">Forgot Password? <span>Click Here!</span></div>
          <div className="Submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
