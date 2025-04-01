import TailButton from "../UI/TailButton" ;
import { useCntStore } from "./usecntStore";
export default function MyDiv3() {
  const increase = useCntStore((state)=>state.increase);
  const decrease = useCntStore((state)=>state.decrease);
  return (
    <div className="w-8/10 h-8/10 
                        bg-lime-500 text-white text-2xl
                        p-10 font-bold
                        flex flex-col justify-start items-center">
      <div className="w-full grid grid-cols-2 gap-4">
        <TailButton caption ="증가"
                     color = "blue" 
                     onClick = {increase} />
        <TailButton caption ="감소"
                     color = "blue" 
                     onClick = {decrease} />
      </div> 
    </div>
  )
}