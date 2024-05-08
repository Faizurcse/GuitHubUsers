import './App.css'
import React, { useEffect, useState } from "react";
//import Effects_1 from "./components/Effects_1";
import FetchApi from './components/FetchApi';
function App() {
  //   const[count,setCount] = useState(0)
  //   useEffect(()=>{
  //     alert(count)
  //   },[count])// when page refresh the run
  return (
    <div>
      {/* <button onClick={()=>setCount(count+1)}>{count}</button> */}
      {/* <Effects_1 /> */}
      <FetchApi/>
    </div>
  );
}

export default App;
