import React, { useState, useEffect, useRef } from "react";
//import "./styles.css";

const useConfirm = (message ="", onConfirm, onCancel) =>{
  if(typeof onConfirm !== "function" || typeof onCancel !== "function"){
    return;
  }
  
  const confirmAction = () =>{
    if(window.confirm(message)){
      onConfirm();
    }else{
      onCancel();
    }
  }
  return confirmAction;
}
 
export default function App() {
  const DeleteWorld = () => console.log("Deleting the World");
  const abort = () => console.log("Aborted");
  const ExamConfirm = useConfirm("Are you sure?",DeleteWorld,abort);
  return ( 
    <div className="App">
    <button onClick = {ExamConfirm}>Delete the World</button>
    </div>
  );
}
