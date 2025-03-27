import { useSearchParams } from "react-router-dom"
import { useRef } from 'react';
import getcode from './getcode.json';


import TailSelect from "../UI/TailSelect";
export default function FcstList() {
  const [ser] = useSearchParams();
  const date = ser.get('dt');
  const si = ser.get('si');
  const guban = ser.get('gubun');
  const x = ser.get('x');
  const y = ser.get('y');

  const RefItems = useRef();
  const opsItems =   getcode.filter(item=>item["예보구분"] == guban)
                            .map(item=>`${item["항목명"]}(${item["항목값"]})`);
  console.log(guban, opsItems);
  const handleChange = () => {
    console.log(RefItems.current.value)
    console.log(opsItems);
  }

  const getFetch = async () => {
    const myKey = import.meta.env.VITE_APP_MY_KEY;
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${myKey}&pageNo=1&numOfRows=1000&dataType=json&base_date=20250327&base_time=0500&nx=55&ny=127`;
  }

  
  return (
    <div>

      <div className='w-10/12 grid grid-cols-1 lg:grid-cols-2 gap 4 border 1px solid '>
        <h1 className="m-6 font-bold text-xl ">
          {si} {guban} ( {date.replaceAll('-', '.')} )
        </h1>
        <TailSelect id="sel" selectRef={RefItems} handleChange={handleChange} optionArray={opsItems} />
      </div>
    </div>
  )
}
