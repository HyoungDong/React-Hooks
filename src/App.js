import React, { useState } from "react";
//import "./styles.css";

const content = [
    {
        tab : "Section 1",
        content : "I'm  the content of the Section 1" 
    },
    {
        tab : "Section 2",
        content : "I'm  the content of the Section 2" 
    }
];

const useTabs = (initialTab, allTabs) =>{
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }
  return {
      currentItem : allTabs[currentIndex],
      changeItem : setCurrentIndex
  }
}


export default function App() {
  const { currentItem, changeItem }= useTabs(0,content);
  //console.log(changeItem);
  return (
    <div className="App">
      {content.map((s,idx)=> <button onClick={() =>changeItem(idx)}>{s.tab}</button>)}
      {currentItem.content}
    </div>
  );
}
