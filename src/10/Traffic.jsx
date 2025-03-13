import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  //패치된 전체 데이터
  const [tdata, setTdata] = useState([]);
  
  //대분류 데이터
  const [c1, setC1] = useState();
  const [selC1, setSelC1] = useState(); //대분류 클릭하고 나올 데이터를 위해서 선택된 대분류데이터를 알아야함

  //중분류 데이터
  const [c2, setC2] = useState();
  const [selC2, setSelC2] = useState(); //대분류 클릭하고 나올 데이터를 위해서 선택된 대분류데이터를 알아야함


  //전체 데이터 패치
  const getFetchData = async () => {
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


  useEffect(() => {
    // console.log("d");

    getFetchData(); //실행되자마자 패치함수 실행. 이때는 tdata에 값이 들어가있지않은 빈배열이였는데 set함수로 변경시킴
  }, []);

  useEffect(() => {
    if (tdata.length == 0) return; //맨첨에 초기화될땐 걸러서 콘솔에 안뜨게 하는 . 초깃값이 배열이니 필드사용가능.
   
    console.log("tdada : " + tdata); //tdata값이 없던 상태에서 위에 유즈이펙트가 겟패치함수 실행하여 안에 셋함수로 tdata값이 변경되고 , 그래서 유즈이펙트의 의존배열이 변경되어 재출력됨.
    //대분류 추출
    let tm = tdata.map(item => item["사고유형대분류"]); //오브젝트가 하나의 아이템
    //중복제거. 근데 타입이 set 집합임. 배열로 바꿔야함. (맵이나 그런거 못쓰니까.)
    tm = new Set(tm);
    //한개씩 가져온다. for문에서 반복문으로 1개씩 넣어줬듯이 , 전개연산자로 가능 arr =[1,2] brr =[3,4]면 [...arr,...brr] 하면 [1,2,3,4]
    tm = [...tm];

    //tm = [...new Set(tm)];으로 해도 됨
    console.log(tm);

    setC1(tm);

  }, [tdata]);


  //중분류 나오게하기
  useEffect(() => {
    if (!selC1) return ;
    console.log("selC1", selC1);
    //대분류가 변경될때마다 자동으로 중분류값에대한 함수실행 (대분류추출과 똑같이함)
    //대분류 추출
    let tm = tdata.filter(item => item["사고유형대분류"]==selC1).map(item => item["사고유형"]);
    tm = new Set(tm);
    tm = [...tm];
    console.log(tm);

    setC2(tm);
  }, [selC1]);


  return (
    <div>
      {/* {c1 !== undefined && <TrafficNav title="대분류" category={c1} selc1={selC1} setselc1={setSelC1} />} */}
    
    
      { c1 !== undefined ?  <TrafficNav title="대분류"  c={c1} selc={selC1} setselc={setSelC1} /> :'' }
      { c2 !== undefined ?  <TrafficNav title="중분류"  c={c2} selc={selC2} setselc={setSelC2} /> :'' }
      
    </div>
  )
}
