import React,{useState} from "react";


function Events() {
    let [count,setCount] = useState(0);
 
    const handleClick = () => {
        setCount(count++);
    };
   
 
    return (
        <div className="Events">
            <h1>Hello React!</h1>
            <div>
                <p>Count: {count}</p>
                <button onClick={handleClick}>Click me</button>
                
            </div>
        </div>
    );
}

export default Events