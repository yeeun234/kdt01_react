import { Link } from "react-router-dom"
export default function RouteNav() {

    return (
        <div className=" w-full  p-5 h-50px bg-pink-100">
            <ul className="flex justify-around text-xl  text-pink-500 font-bold   ">
                <Link to="/">
                    <li className=" bg-pink-200  border border-pink-100  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        RouteHome
                    </li>
                </Link>
                <Link to="/p1">
                    <li className=" bg-pink-200 border border-pink-100  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        Page1
                    </li>
                </Link>
                <Link to="/p2">
                    <li className=" bg-pink-200 border border-pink-100  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        Page2
                    </li>
                </Link>
            </ul>
        </div>
    )
}
