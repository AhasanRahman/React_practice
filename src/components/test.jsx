 
const test = () => {
  const status = true;

  switch (status) {
    case true:
      return <button style={{color:'red', marginLeft:'100px'}}>Logout Btn</button>;
    case false:
      return <button>Login Btn</button>;

    default:
      return null;
  }
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
