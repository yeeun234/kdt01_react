import { useSearchParams } from "react-router-dom"
import { useRef  } from 'react';


import TailSelect from "../UI/TailSelect";
export default function FcstList() {
  const [ser] = useSearchParams();
  const date = ser.get('dt');
  const si = ser.get('si'); 
  const guban = ser.get('guban');
  const x = ser.get('x');
  const y = ser.get('y');

  const Ref = useRef();

  const getFetch = async () =>{
    const myKey = import.meta.env.VITE_APP_MY_KEY;
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${myKey}&pageNo=1&numOfRows=1000&dataType=json&base_date=20250327&base_time=0500&nx=55&ny=127`;
  }
  return (
    <div>
       <h1 className="m-6 font-bold text-xl ">
        {si} {guban} ( {date} )
       </h1>
       <TailSelect id="sel" selectRef={Ref} handleChange={()=>{}} optionArray={[]}/>
    </div>
  )
}
