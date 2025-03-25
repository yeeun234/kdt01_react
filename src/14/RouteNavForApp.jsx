import { Link } from "react-router-dom"

export default function RouteNav() {

    return (
        <div className=" w-full  p-5 h-50px mt-4 mb-4">
            <ul className="flex justify-around text-xl  text-pink-500 font-bold   ">
                <Link to="/FoodMain">
                    <li className=" bg-pink-300  border border-pink-200  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        FoodMain
                    </li>
                </Link>
                <Link to="/BoxOffice">
                    <li className=" bg-pink-300 border border-pink-200  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        BoxOffice
                    </li>
                </Link>
                <Link to="/Traffic">
                    <li className=" bg-pink-300 border border-pink-200  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        Traffic
                    </li>
                </Link>
                <Link to="/Gallery">
                    <li className=" bg-pink-300 border border-pink-200  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        Gallery
                    </li>
                </Link>
                <Link to="/SelectFestival">
                    <li className=" bg-pink-300 border border-pink-200  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        SelectFestival
                    </li>
                </Link><Link to="/Lotto">
                    <li className=" bg-pink-300 border border-pink-200  hover:border-pink-400 1px p-1.5 rounded-xl solid">
                        Lotto
                    </li>
                </Link>

            </ul>
        </div>
    )
}
