import About from "../pages/About";
const test = () => {
  const ItemObj = {
    name: "Ahasan",
    city: "Dhaka",
    phone: 123456,
  };

  return (
    <div>
      <About item={ItemObj} />
    </div>
  );
};

export default test;

// ternary operator
// let status= true;
// return(
//     <div>
//         status?
//         <button>logout</button>
//         :
//         <button>login</button>
//     </div>
// )
