import { useState, useEffect, useRef } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6"; 

export default function BoxOffice() {
  //State variables
  const [tags, setTags] = useState([]);
  const [info, setInfo] = useState('');
  //날짜설정
  const [dt, setDt] =useState();

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

//겟패치 변수 바깥에 있어도 되는 이유 = 겟패치에서 맵을 생성할때 자동으로 객체를 인수로 전달해줌. 
//유즈스테이트를 이용하여 클릭할때마다 인포가 만들어지게 해야함. 
const handleclick = (item) => {
  console.log(item);
  setInfo([`| ${item.movieNm} | ${item.openDt} 개봉 | ${item.rankOldAndNew} |`]);
};

  //fetch the daily boxoffice data
  const getFetchData = async () => {
    const mvApiKey = import.meta.env.VITE_APP_MY_KEY;
    let tmdt = dt.replaceAll('-', '');
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    url = `${url}key=${mvApiKey}&targetDt=${tmdt}`;//dt로 하면 순위 증감률이 안나와서 다른날짜로 변경.
    console.log(url)

    const resp = await fetch(url);
    const data = await resp.json();

    let boxList = data.boxOfficeResult.dailyBoxOfficeList;
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
    
    
  }



  useEffect(() => {
    //will fetch once when component was run. //제일 처음 로드되는 값. dt를 어제날짜로 자동렌더링되게 세팅. 데이트의 맥스값도 자동으로 설정되게 함(한번만)
    setDt(getYesterday());
    refDate.current.max = getYesterday();

  }, []);

  
  //useref변수
  const refDate = useRef();

  //dt 날짜 설정이 바뀔때마다 화면 재설정 
  useEffect(()=>{

    if(!dt) return; 
    refDate.current.value =dt ; //제일 처음에 로드됐을때 95라인으로 인해 벨류값이 어제날짜로 로드되게 설정.
    getFetchData();
  },[dt]);
    
  const handleChange = ()=>{
    setInfo(''); //바뀔때마다 제일아래 인포값이 초기화되도록함.
    setDt(refDate.current.value); //체인지가 있을때마다 dt값이 변경되도록함.
  }


  return (
    <div>
      <div className="flex justify-end items-center m-5">
        <span className="font-bold text-2xl p-1 inline-flex "> 날짜 선택 :</span>
        <input  onChange={handleChange} type="date" className=" m-1 border-2"  ref={refDate}/>
      </div>
     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr >
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
          <tfoot className="w-full  text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr><td colSpan="8" className =" w-full h-20 text-center font-bold text-1xl">
            {/* 클릭하면 여기에 정보가 나오도록 하려면 ... tr에 클릭이벤트 넣고 유즈스테이트 를 사용해서 클릭할때마다 변경되게하기. */}
            {info}
            </td></tr>
          </tfoot>
        </table>
        
    </div>
  )
}
