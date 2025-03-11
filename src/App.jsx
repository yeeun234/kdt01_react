// import Hello from "./01/Hello"
import HelloDate from "./01/HelloDate"
import { IoHome } from "react-icons/io5";
import { GrAndroid } from "react-icons/gr";
import MyClock from "./02/MyClock";
// import MyDiv1 from "./03/MyDiv1";
// import MyList from "./04/MyList";
// import Lotto from "./05/Lotto";
// import FoodMain from "./06/FoodMain";
// import MyToggle from "./07/MyToggle";
// import MyEffect from "./08/MyEffect";
import BoxOffice from "./09/BoxOffice";

function App() {

  return (
    <div className='w-full xl:w-8/10 h-screen mx-auto flex flex-col'>
      <header className="w-full min-h-20 bg-pink-200 flex justify-between items-center px-20">
        <h1 className="text-4xl font-bold text-pink-700">KDT01</h1>
        <div className="font-bold text-2xl text-pink-700 shadow hover:shadow-lg transition-shadow duration-300 border-none">
          <IoHome />
        </div>
      </header>
      <main className="w-full  flex-grow text-center
      flex flex-col justify-center items-center overflow-y-auto">
        {/* <FoodMain></FoodMain> */}
        {/* <MyToggle></MyToggle> */}
        {/* <MyEffect></MyEffect> */}
        {/* <MyClock></MyClock> */}
        <BoxOffice></BoxOffice>
      </main>
      <footer className="w-full min-h-20 bg-pink-100 flex justify-center  text-md font-bold items-center px-10">
        <h1 className="font-bold text-[12px] text-gray-600">[K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정</h1>

      </footer>
    </div>
  )
}

export default App
