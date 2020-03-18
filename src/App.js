import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios"
//import "./styles.css";



export default function App() {               
  const {loading, data,refetch}= useAxios({url:"https://yts.mx/api/v2/list_movies.json"}); 
  return (
    <div className="App" styl e={{ height: "1000vh" }}>
      <h1 >{data?.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick = {refetch}>Refetch</button>
    </div>
  );
}
