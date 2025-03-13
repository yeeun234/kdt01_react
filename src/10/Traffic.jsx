import TailButtonLine from "../UI/TailButtonLine";
import { useState ,useEffect, use } from "react";


export default function Traffic() {
    //패치된 전체 데이터
    const [tdata,setTdata] =useState([]);
    //대분류 데이터
    const [c1, setC1] =useState([]);

    //전체 데이터 패치
    const getFetchData = async()=>{
    const MyApiKey = import.meta.env.VITE_APP_API_KEY;
    // console.log(MyApiKey);
    let url = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&service";
    url = `${url}Key=${MyApiKey}`;
    // console.log(url);
    
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.data);
    //console.log("fetch",tdata); 위에 셋데이터햇는데 왜 페치는 콘솔에 빈배열로 나오나 ? => 셋으로 티데이터변경하고 감지하는건 유즈이펙트를써야함.
    }
    //겟패치 데이터 호출하여 콘솔에 찍어보기.
    // getFetchData();

    
    useEffect(()=>{
        // console.log("d");
        
        getFetchData(); //실행되자마자 패치함수 실행. 이때는 tdata에 값이 들어가있지않은 빈배열이였는데 set함수로 변경시킴
    },[]);

    useEffect(()=>{
      if(tdata.length<=0) return; //맨첨에 초기화될땐 걸러서 콘솔에 안뜨게 하는 . 초깃값이 배열이니 필드사용가능.
        console.log("tdada : "+tdata); //tdata값이 없던 상태에서 위에 유즈이펙트가 겟패치함수 실행하여 안에 셋함수로 tdata값이 변경되고 , 그래서 유즈이펙트의 의존배열이 변경되어 재출력됨.
    },[tdata]);
  return (
    <div>
      <TailButtonLine html="ㄱ" bgColor="blue" />
    </div>
  )
}
