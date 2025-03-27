import { useSearchParams } from "react-router-dom"
import { useEffect, useRef } from 'react';
import getcode from './getcode.json';


import TailSelect from "../UI/TailSelect";
export default function FcstList() {
  const [ser] = useSearchParams();
  let date = ser.get('dt');
  date= date.replaceAll('-', '');
  const si = ser.get('si');
  const gubun = ser.get('gubun');
  const x = ser.get('x');
  const y = ser.get('y');

  const RefItems = useRef();
  const opsItems =   getcode.filter(item=>item["예보구분"] == gubun)
                            .map(item=>`${item["항목명"]}(${item["항목값"]})`);
  console.log(gubun, opsItems);
  const handleChange = () => {
    console.log(RefItems.current.value)
    console.log(opsItems);
  }

  
  const getFetchData = async () => {
      const mvAppKey = import.meta.env.VITE_APP_API_KEY;
      const gubunFcst = gubun === "초단기예보" ? "getUltraSrtFcst" : "getVilageFcst";
      let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${gubunFcst}?serviceKey=${mvAppKey}&pageNo=1&numOfRows=1000&dataType=json&base_date=${date}&base_time=0500&nx=${x}&ny=${y}`; 
      console.log(url)
  /*
      const resp = await fetch(url);
      const data = await resp.json();
  
      let fcst = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxList);
 
      let tm = boxList.map(item => 
                                  //맵의 리턴값은 하나여야하니 tr 태그로 감싸주기 , 키값은 tr태그 안에 속성으로 넣어 html 에서 안보이게 하기.
                                  <tr key={item.movieCd}  
                                  onClick={()=>handleclick(item)} //무슨영화인지 객체를 클릭이벤트 함수의 인수로 전달해야함
                                  className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                  <td className="w-4 p-4">
                                    
                                  </td>
                                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.rank}
                                  </td>
                                  <td className="px-6 py-4 text-left">
                                  {item.movieNm}
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                  {parseInt(item.salesAmt).toLocaleString()}
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                  {parseInt(item.audiCnt).toLocaleString()}
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                  {parseInt(item.salesAcc).toLocaleString()}              
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                  {parseInt(item.audiAcc).toLocaleString()}      
                                  </td>
                                  <td className="px-6 py-4 text-center inline-flex justify-center items-center"  >
                                  { parseInt(item.rankInten) > 0 ? <span className="text-red-600"><FaArrowUp /></span> 
                                            : parseInt(item.rankInten) < 0 ? <span className="text-blue-600"><FaArrowDown /></span> : ''}
                                    {item.rankInten == 0 ? '-' : Math.abs(item.rankInten)} 
                                  </td>
                                </tr>  
                                
          );
  
      setTags(tm);
      
      */
    }

    useEffect(() => {
      getFetchData();
    }, []);
  
  return (
    <div>

      <div className='w-10/12 grid grid-cols-1 lg:grid-cols-2 gap 4 border 1px solid '>
        <h1 className=" m-6 font-bold text-xl ">
          {si} {gubun} ( {date.replaceAll('-', '.')} )
        </h1>
        <TailSelect id="sel" selectRef={RefItems} handleChange={handleChange} optionArray={opsItems} />
      </div>
    </div>
  )
}
