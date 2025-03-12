import { useState, useEffect } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6"; 

export default function BoxOffice() {
  //State variables
  const [tags, setTags] = useState([]);

 //어제날짜가져오기 
 const getYesterday = () => {
  let dt = new Date();
  dt.setDate(dt.getDate() - 1);

  //년도
  let year = dt.getFullYear();

  //월
  let month = String(dt.getMonth() + 1).padStart(2, '0');
  // month = month < 10 ? '0' + month : month ;

  //일 
  let day = String(dt.getDate()).padStart(2, '0');

  return (year + '-' + month + '-' + day);
}


  //fetch the daily boxoffice data
  const getFetchData = async () => {
    const mvApiKey = import.meta.env.VITE_APP_MY_KEY;
    let dt = getYesterday().replaceAll('-', '');
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    url = `${url}key=${mvApiKey}&targetDt=${20250305}`;//dt로 하면 순위 증감률이 안나와서 다른날짜로 변경.
    console.log(url)

    const resp = await fetch(url);
    const data = await resp.json();

    let boxList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(boxList);

    let tm = boxList.map(item => 
                                //맵의 리턴값은 하나여야하니 tr 태그로 감싸주기 , 키값은 tr태그 안에 속성으로 넣어 html 에서 안보이게 하기.
                                <tr key={item.movieCd}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                  
                                </td>
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.rank}
                                </td>
                                <td className="px-6 py-4 text-right">
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
  }



  useEffect(() => {
    //will fetch once when component was run.
    getFetchData();

  }, []);
  return (
    <div>
     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td className="p-4">              
              </td>
              <td className="px-6 py-3">
                순위
              </td>
              <th className="px-6 py-3">
                영화명
              </th>
              <th className="px-6 py-3">
                매출액
              </th>
              <th className="px-6 py-3">
                관객수
              </th>
              <th className="px-6 py-3">
                누적 매출액
              </th>
              <th className="px-6 py-3">
                누적 관객수
              </th>
              <th className="px-6 py-3">
                증감율
              </th>
            </tr>
          </thead>
          <tbody>
            {tags}
          </tbody>
        </table>
        
    </div>
  )
}
