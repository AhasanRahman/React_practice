import React from "react";
import Header from "./header";
import About from "./About";
 

const Service = () => {

    const ItemObj = {
        name: "Ahasan",
        city: "Dhaka",
        phone: 123456,
      };
    

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
        <h1 style={{ background: "gray" }}>This is service page</h1>
        <About item ={ItemObj} />
        
      </div>
    </div>
  );
};

export default Service;
