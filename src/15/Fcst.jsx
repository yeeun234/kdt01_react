import { useRef ,useEffect  } from 'react';
import { useNavigate } from "react-router-dom";
import TailSelect from '../UI/TailSelect';
import TailButtonLine from '../UI/TailButtonLine';
import getxy from './getxy.json';
export default function Fcst() {
    const RefDate = useRef();
    const RefSi = useRef();
    const navigate = useNavigate() ;

    useEffect(() => {
        RefDate.current.value = new Date().toISOString().split('T')[0];
      }, []) ;

    let opsSi = getxy.map(item=>item["1단계"]);
    opsSi=["--시/도 선택--" ,...opsSi];

    
    const handleChange = () => {
        console.log(RefSi.current.value)
    }

    const handleClick = (gubun) => {
        if(RefSi.current.value === "--시/도 선택--") {
            alert("시/도를 선택하세요.");
            return;
        }
        const tm = getxy.filter(item=>item["1단계"] === RefSi.current.value)[0];
        console.log(tm);
        const x = tm["격자 X"] ;
        const y = tm["격자 Y"] ;
        console.log(tm)
        console.log(RefSi.current.value, RefSi.current.value, gubun, x, y)
        navigate(`/fcstlist?dt=${RefDate.current.value}&si=${RefSi.current.value}&gubun=${gubun}&x=${x}&y=${y}`);
    }
  return (
    <>
        <h1 className="m-6 font-bold text-3xl">날씨 정보</h1>
        <form onSubmit={(e)=>{e.preventDefault()}} className='w-10/12 grid grid-cols-1 lg:grid-cols-2 gap 4 border 1px solid '>
            <input ref={RefDate} type='date' className=' m-3'  />
            <TailSelect id="sel" selectRef={RefSi} handleChange={handleChange} optionArray={opsSi} />
            <TailButtonLine html="초단기 예보" bgColor="blue" onClick={()=> handleClick("초단기예보")}/>
            <TailButtonLine html="단기 예보" bgColor="blue" onClick={()=> handleClick("단기예보")}/>
        </form>
    </>
  )
}
