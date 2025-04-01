import MyDiv2 from "./MyDiv2" ; 
import { useCnt } from "./useCnt";
import { useState, useEffect } from "react";
export default function MyDiv1() { 
  const n = useCnt((state) => state.cnt) ;
  const [n2, setN2] = useState() ;

  useEffect(() => {
    setN2(n * 2) ;
  }, [n]);
  return (
    <div className="w-8/10 h-8/10  
                    bg-lime-900 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-center items-center">
      <div className="w-full text-left mb-10">
        (zustand) n = {n} , n2 = {n2}  
      </div>
      <MyDiv2 />
    </div>
  )
}
