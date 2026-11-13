import {useState,useEffect} from "react"

const CustomCursor = () => {
  const [position, setPosition] = useState({x:0,y:0});

  useEffect(()=>{
    const moveHandler = (e)=>{
      setPosition({x:e.clientX , y:e.clientY});
    };

    window.addEventListener("mousemove",moveHandler);

    return ()=>{
      window.removeEventListener("mousemove",moveHandler);
    }
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{ left: position.x, top: position.y, transform: "translate(-50%, -50%)" }}
    >
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-[#FF0000] to-[#950101] blur-xl opacity-60"/>
    </div>
  );
}

export default CustomCursor
