import React, { useState, useEffect, useRef } from "react";
//import "./styles.css";

const useNotification = (title, options) =>{
  if(!("Notification" in window)){
    return;
  }
  const fireNotif = () =>{
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then((perm) =>{
        if(perm ==="granted"){
          new Notification(title,options);
        }else{
          return;
        }

      });
    }else{
      console.log(options);
      new Notification(title,options)
    }
  }

  return fireNotif;
};

export default function App() {
  const triggerNotif = useNotification("Can ",{
    body:"I Hate Notification"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick = {triggerNotif}>Hello</button>
    </div>
  );
}
