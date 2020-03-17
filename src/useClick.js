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