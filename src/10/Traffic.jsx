import TailButtonLine from "../UI/TailButtonLine";
import { useState ,useEffect, use } from "react";


export default function Traffic() {
    const [tdata,setTdata] =useState([]);
    
    const getFetchData = async()=>{
    const MyApiKey = import.meta.env.VITE_APP_API_KEY;
    // console.log(MyApiKey);
    let url = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&service";
    url = `${url}Key=${MyApiKey}`;
    // console.log(url);
    
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.data);
    }
    //겟패치 데이터 호출하여 콘솔에 찍어보기.
    // getFetchData();

    
    useEffect(()=>{
        // console.log("d");
        getFetchData(); //실행되자마자 패치함수 실행. 이때는 tdata에 값이 들어가있지않은 빈배열이였는데 set함수로 변경시킴
    },[]);

    useEffect(()=>{
        console.log("tdada : "+tdata); //tdata값이 없던 상태에서 위에 유즈이펙트가 겟패치함수 실행하여 안에 셋함수로 tdata값이 변경되고 , 그래서 유즈이펙트의 의존배열이 변경되어 재출력됨.
    },[tdata]);
  return (
    <div>
      <TailButtonLine html="ㄱ" bgColor="blue" />
    </div>
  )
}
