import { useState } from "react";

function App() {
  let [counter , setCounter]= useState(0)
  // let counter = 0;
  const Increment = () => {
    if (counter<20) {
    setCounter(counter+1);
    // ===========================Imp ========================
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
// ==================We CAN DO THIS BY PASSING CALL BACK IN A FUNCTION
     

setCounter(counter+1);
    // setCounter(prev=> prev+1);
    // setCounter(prev=> prev+1);
    // setCounter(prev=> prev+1);
      
    }
    // console.log('clicked',  counter );
  }
  const Decrement = () => {
    if(counter>0)
    {setCounter(counter-1);}
    // console.log('clicked',  counter );
  }

  return (
    <>
      <h1>Hello Word</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={Increment}>Increment</button><br /><br />
      <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
