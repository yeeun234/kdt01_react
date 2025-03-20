import TailSelect from "../UI/TailSelect";
import TailCard from "../UI/TailCard";
import { useRef,useEffect,useState } from "react";
export default function SelectFestival() {
    const selectRef = useRef();
    const [totalData, setTotalData] = useState([]);
    const [options, setOptions] = useState([]); //처음에 빈배열로 들어가도, 나중에 데이터가 들어오면 그때 배열로 들어감. 패치후의 값이 변경된 것을 넣어야하니 유즈스테이트를씀.
    const [cards, setCards] = useState([]); //구 선택하면 뜨는 카드만들기
   

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
        let Gu = totalData.map((item) => item.GUGUN_NM)
        console.log("구정보",Gu);
        //중복제거 ( 집합으로 만들고 배열안에서 전개연산자)
        Gu = [...new Set(Gu)];
        console.log("중복제거",Gu);

        //정렬
        Gu.sort(); //오름차순

        //셀렉트 옵션값에 중복제거한 구값 배열을 옵션속성배열로 전달
        setOptions(Gu);

    }, [totalData]);
    
    //셀렉트박스 선택시 이벤트
    const handleChange = () => {
        console.log(selectRef.current.value);
        //셀렉트박스 선택시 그 구에 해당하는 축제만 카드로 만들어서 보여주기
        let tm = totalData.filter((item) => item.GUGUN_NM === selectRef.current.value);// 선택한 구와 일치하는 데이터만 필터링
        //해당 데이터로 카드 만들기
        tm= tm.map((item)=> <TailCard key={item.UC_SEQ} title={(item.MAIN_TITLE).split('(')[0]} subtitle={item.MAIN_PLACE} imgurl={item.MAIN_IMG_NORMAL} keyword={item.USAGE_DAY_WEEK_AND_TIME} imgLink={item.HOMEPAGE_URL}/>);
        //만든 태그들 스테이트변수에 넣어주기
        setCards(tm);
    }
  return (
    <div>
        <h1 className="m-6 font-bold text-3xl">부산 축제 정보</h1>
        {options.length >0 && <TailSelect id="sel1" selectRef={selectRef}  handleChange={handleChange}  optionArray={options}/> }
        <div className="grid grid-cols-3 gap-4 mb-1">
        {cards}
        </div>
    </div>
    
  )
}
