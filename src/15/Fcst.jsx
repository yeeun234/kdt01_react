import { useRef } from 'react';
import TailSelect from '../UI/TailSelect';
import TailButtonLine from '../UI/TailButtonLine';
import getxy from './getxy.json';
export default function Fcst() {
    const RefDate = useRef();
    const RefSi = useRef();

    let opsSi = getxy.map(item=>item["1단계"]);
    opsSi=["--시/도 선택--" ,...opsSi];
  return (
    <>
        <h1 className="m-6 font-bold text-3xl">날씨 정보</h1>
        <form onSubmit={(e)=>{e.preventDefault()}} className='w-10/12 grid grid-cols-1 lg:grid-cols-2 gap 4 border 1px solid '>
            <input ref={RefDate} type='date' className=' m-3'  />
            <TailSelect id="sel" selectRef={RefSi} handleChange={()=>{}} optionArray={opsSi} />
            <TailButtonLine html="초단기예보" bgColor="blue" onClick={()=>{}}/>
            <TailButtonLine html="단기예보" bgColor="blue" onClick={()=>{}}/>
        </form>
    </>
  )
}
