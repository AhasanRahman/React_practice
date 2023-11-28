import React from "react";
import Header from "./header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hero" style={{}}>
        <div style={{ padding: "20px" }}>
          <h2
            style={{ color: "#EC7063 ", fontSize: "35px", fontWeight: "bold", marginTop:"60px", }}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
