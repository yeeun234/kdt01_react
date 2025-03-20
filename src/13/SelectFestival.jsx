import TailSelect from "../UI/TailSelect";
import { useRef,useEffect,useState } from "react";
export default function SelectFestival() {
    const selectRef = useRef();
    const [totalData, setTotalData] = useState([]);
    const [options, setOptions] = useState([]); //처음에 빈배열로 들어가도, 나중에 데이터가 들어오면 그때 배열로 들어감. 패치후의 값이 변경된 것을 넣어야하니 유즈스테이트를씀.

   

    const getFetch = async () => {
        const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${VITE_APP_API_KEY}&pageNo=1&numOfRows=39&resultType=json`;
        const res = await fetch(url);
        const data = await res.json();

        const festivalList = data.getFestivalKr.item;
        console.log(festivalList);
        
        //전체 데이터입력
        setTotalData(festivalList);
    }
     //전체 데이터 한번만 패치
     useEffect(() => {
        getFetch();
    }, []);

    //전체 데이터가 들어가고 옵션배열 만들기
    useEffect(() => {
        
        //구 정보 받아와서 배열 만들기
        const Gu = totalData.map((item) => item.GUGUN_NM)
        console.log("구정보",Gu);
        //중복제거 ( 집합으로 만들고 배열안에서 전개연산자)
        const guSet = [...new Set(Gu)];
        console.log("중복제거",guSet);

        //셀렉트 옵션값에 중복제거한 구값 배열을 옵션속성배열로 전달
        setOptions(guSet);

    }, [totalData]);
    
    //셀렉트박스 선택시
    const handleChange = () => {
        console.log(selectRef.current.value);
    }
  return (
    <div>
      <TailSelect id="sel1" selectRef={selectRef}  handleChange={handleChange}  optionArray={options}/>
    </div>
  )
}
