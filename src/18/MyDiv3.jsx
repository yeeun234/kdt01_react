import TailButton from "../UI/TailButton" ; 
import { useCnt } from "./useCnt";
import { useState } from "react";

export default function MyDiv3() { 
  const increase = useCnt((state) => state.increase) ;
  const decrease = useCnt((state) => state.decrease) ;

  const n = useCnt((state) => state.cnt) ;
  const handelSave = ()=>{
    localStorage.setItem("n",n);
    localStorage.setItem("n2",n2);
  }
  return (
    <div className="w-8/10 h-8/10 
                        bg-lime-500 text-white text-2xl
                        p-10 font-bold
                        flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-2 gap-4">
        <TailButton caption ="증가"
                     color = "blue" 
                     onClick = {increase} />
        <TailButton caption ="감소"
                     color = "blue" 
                     onClick = {decrease} />
        <TailButton caption ="저장"
                     color = "pink" 
                     onClick = {handelSave} />
      </div> 
    </div>
  )
}