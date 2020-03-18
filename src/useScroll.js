export const useScroll = () =>{
    const [state, Setstate] = useState({
      x : 0,
      y : 0
    });
    const onScroll = () =>{
      console.log( "y",window.scrollY, "x" , window.scrollX);
      Setstate({
        x : window.scrollX,
        y : window.scrollY
      })
    }
    useEffect(() =>{
      window.addEventListener("scroll", onScroll);
  
      return () =>{
        window.removeEventListener("scroll", onScroll);
      }
    },[])
  
    return state;
  };