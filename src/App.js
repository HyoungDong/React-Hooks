import React, { useState, useEffect, useRef } from "react";
//import "./styles.css";

const useClick =(onClick) =>{
  const element = useRef();

  useEffect(()=>{
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return () =>{// ComponentWillUnmount 역할
      element.current.removeEventListener("click", onClick);
    }
  });
  return element;
}

export default function App() {
  const input = useRef();
  const sayhello= () => console.log("say hello");
  const title = useClick(sayhello);
  return ( 
    <div className="App">
    <h1 ref = {title} > HI </h1>
    <input ref = {input} placeholder = "la"/>
    </div>
  );
}
