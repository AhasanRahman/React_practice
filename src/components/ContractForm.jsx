 
import { useRef } from "react";
const ContractForm = () => {


    let line = useRef();
    const change =()=> {
        line.current.innerText= "hello"
    }

    return (
        <div>
             <form>
             {/* <input placeholder="name"/>
            <input placeholder="address"/>
             <input placeholder="phone"/>
             <input placeholder="Email"/> */}
             <h1 ref={line}></h1>

             {/* <button onClick={(change)=>{
                alert('submit successfully')
             }}>submit</button> */}


             </form>
            

             
        </div>
    );
};

export default ContractForm;