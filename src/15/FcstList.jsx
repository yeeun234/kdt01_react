import { useSearchParams } from "react-router-dom"
import { use, useEffect, useRef ,useState } from 'react';
import getcode from './getcode.json';


import TailSelect from "../UI/TailSelect";
export default function FcstList() {
  const [ser] = useSearchParams();
  //패치한 날씨정보 저장
  const [tdata,setTdata] = useState();
  //선택값 바뀔때마다 변경
  const [tags,setTags] = useState();
  let date = ser.get('dt');
  date = date.replaceAll('-', '');
  const si = ser.get('si');
  const gubun = ser.get('gubun');
  const x = ser.get('x');
  const y = ser.get('y');

  //sky는 코드값마다 맑음 흐림 등 설정이 다름
  const sky = {'1' : '맑음😊' ,'3':'구름많음'};
  const pty = {'0':'없음','1':'비','2':'비/눈', '4':'소나기','5':'빗방울','3':'눈','6':'빗방울눈날림','7':'눈날림'}

  const RefItems = useRef();
  const opsItems = getcode.filter(item => item["예보구분"] == gubun)
    .map(item => `${item["항목명"]}[${item["항목값"]}]`);
  console.log(gubun, opsItems);
  const handleChange = () => {
    console.log(RefItems.current.value);

    //내가 만든거 셀렉트박스에 넣은 값에서 항목값만 뽑아내기
    const code = RefItems.current.value.split("[")[1].replaceAll(']','');
    console.log(code);
    //해당 항목명 값들만 골라내야하니 필터사용
    let tm = tdata.filter(item=>item.category == code);
    // console.log(tm);///
    //항목이 정해지면 단위도 정해야함. 필터해서 나오는 배열 (하나 나옴) 거기서 단위뽑기
    let unit = getcode.filter(item => item.예보구분 == gubun && item["항목값"]==code);
    unit = unit[0].단위;
    console.log("단위",unit);
    tm = tm.map(item => <tr key ={item.fcstDate+item.fcstTime} className="hover:bg-amber-300 w-full" >
                            <td className="p-4">
                            </td>
                            <td className="px-6 py-3">
                              {RefItems.current.value}
                            </td>
                            <td className="px-6 py-3">
                              {item.fcstDate.slice(0,4)}.{item.fcstDate.slice(4,6)}.{item.fcstDate.slice(6,8)}
                            </td>
                            <td className="px-6 py-3">
                              {item.fcstTime.slice(0,2)}시{item.fcstTime.slice(2,4)}분
                            </td>
                            <td className="px-6 py-3">
                              { code == 'SKY' ? `${sky[item.fcstValue]}` 
                                              : `${item.fcstValue}${unit}` }
                            </td>
                        </tr>)

    setTags(tm);
  }


  const getFetchData = async () => {
    const mvAppKey = import.meta.env.VITE_APP_API_KEY;
    const gubunFcst = gubun === "초단기예보" ? "getUltraSrtFcst" : "getVilageFcst";
    const baseTime = gubun === "초단기예보" ? "0630" : "0500";
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${gubunFcst}?serviceKey=${mvAppKey}&pageNo=1&numOfRows=1000&dataType=json&base_date=${date}&base_time=${baseTime}&nx=${x}&ny=${y}`;
    console.log(url)
   
        const resp = await fetch(url);
        let data = await resp.json();
        data =data.response.body.items.item;
        setTdata(data);
  }



  useEffect(() => {
    getFetchData();
  }, []);

  //데이터가 채워지면
  useEffect(()=>{ 
    if(!tdata) return;
    console.log("tdata",tdata);
    //시작시 선택된것처럼
    handleChange();
  },[tdata]);

  useEffect
  return (
    <div>

      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap 4 bg-amber-50 mt-4 place-items-center'>
        <h1 className=" m-6 font-bold text-xl ">
          {si} {gubun} ( {date.replaceAll('-', '.')} )
        </h1>
        <TailSelect id="sel" selectRef={RefItems} handleChange={handleChange} optionArray={opsItems} />
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="font-bold" >
            <td className="p-4">
            </td>
            <td className="px-6 py-3">
              항목명
            </td>
            <th className="px-6 py-3">
              예측일자
            </th>
            <th className="px-6 py-3">
              예측시간
            </th>
            <th className="px-6 py-3">
              예측값
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {tags}
        </tbody>
      </table>
    </div>
  )
}
