import { Link  ,useNavigate} from "react-router-dom"
import TailButton from "../UI/TailButton"

export default function RouteHome() {
    const navigate = useNavigate();
  return (
    <div className=" w-full  flex flex-col items-center justify-start  p-5  bg-pink-100 mt-5 mb-5">
      <ul className=" w-3/10  text-pink-500 flex flex-col  ">
        <Link to="/p1/🍎/사과">
        <li className="mr-2 bg-pink-200 border border-pink-100 hover:border-pink-400 1px p-1.5 rounded-xl solid">
            사과🍎
        </li>
        </Link>
        <Link to="/p1/🍌/바나나">
        <li className=" mr-2 h-full bg-pink-200 border border-pink-100 hover:border-pink-400 1px p-1.5 rounded-xl solid">
            바나나🍌
        </li>
        </Link>
        <Link to="/p1/🍉/수박">
        <li className="bg-pink-200 border border-pink-100 hover:border-pink-400 1px p-1.5 rounded-xl solid">
            수박🍉
        </li>
        </Link>
      </ul>

        
        <div className="w-3/10">
            <TailButton caption="사과🍎" color="blue" onClick={() => navigate("p2/?item1=🍎&item2=사과")} />
        
            <TailButton caption="바나나🍌" color="blue" onClick={() => { }} />
        
            <TailButton caption="수박🍉" color="blue" onClick={() => { }} />
        </div>
    </div>
  )
}
