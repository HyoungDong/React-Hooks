import React, { useState, useEffect, useRef } from "react";
//import "./styles.css";

const useBeforeLeave = (onBefore)=> {
  const handle = (event) => {
    const { clientY } = event;
    if(clientY <=0)
    onBefore();
  }
  useEffect(()=>{  
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave",handle);
  },[]);
  if(typeof onBefore !== "function"){
    return;
  }
} 


export default function App() {
  const begForLife = () =>console.log("plz Don't leave");
  useBeforeLeave(begForLife);
  return ( 
    <div className="App">
    Hello
    </div>
  );
}
