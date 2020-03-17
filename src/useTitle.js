export const useTitle = (initialvalue) =>{
    const [title, setTitle] = useState(initialvalue);
  
    const updateTitle= ()=>{
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    
    useEffect(updateTitle,[title]);
    return setTitle;
  }