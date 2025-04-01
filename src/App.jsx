import { Route,Routes,BrowserRouter,Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { GrAndroid } from "react-icons/gr";

import MyClock from "./02/MyClock";
import Lotto from "./05/Lotto";
import FoodMain from "./06/FoodMain";
import BoxOffice from "./09/BoxOffice";
import Traffic from "./10/Traffic";
import Gallery from "./12/Gallery"
import SelectFestival from "./13/SelectFestival";
import RouteNavForApp from "./14/RouteNavForApp";
import Fcst from "./15/Fcst";
import FcstList from "./15/FcstList";
import MyDiv1 from "./16/MyDiv1";
function App() {

  return (
    <BrowserRouter>
    <div className='w-full xl:w-8/10 h-screen mx-auto flex flex-col'>
      <header className="w-full min-h-20 h-20 bg-pink-200 flex justify-between items-center px-20">
        
        <h1 className="text-4xl font-bold text-pink-700">KDT01</h1>
        <RouteNavForApp/>
        <div className="font-bold text-2xl text-pink-700 shadow hover:shadow-lg transition-shadow duration-300 border-none">
          <Link to='/'><IoHome /></Link>
        </div>
      </header>
      <main className="w-full  flex-grow text-center
      flex flex-col justify-start items-center overflow-y-auto">
        <Routes>
          <Route path='/' element={<MyDiv1/>}></Route>
          <Route path='/FoodMain' element={<FoodMain/>}></Route>
          <Route path='/BoxOffice' element={<BoxOffice/>}></Route>
          <Route path='/Traffic' element={<Traffic/>}></Route>
          <Route path='/Gallery' element={<Gallery/>}></Route>
          <Route path='/SelectFestival' element={<SelectFestival/>}></Route>
          <Route path='/Lotto' element={<Lotto/>}></Route>
          <Route path='/Fcst' element={<Fcst/>}></Route>
          <Route path='/FcstList' element={<FcstList/>}></Route>
        </Routes>
      </main>
      <footer className="w-full min-h-20 bg-pink-100 flex justify-center  text-md font-bold items-center px-10">
        <h1 className="font-bold text-[12px] text-gray-600">[K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정</h1>

      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
