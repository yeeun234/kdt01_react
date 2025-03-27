import { useSearchParams } from "react-router-dom"
import { useRef  } from 'react';

import TailSelect from "../UI/TailSelect";
export default function FcstList() {
  const [ser] = useSearchParams();
  console.log("ser",ser);
  let qlist = [...ser];
  console.log("qlist",qlist);
  let date = qlist[0][1];
  let si = qlist[1][1]; 
  let guban = qlist[2][1];
  let x = qlist[3][1];
  let y = qlist[4][1];
  const Ref = useRef();
  return (
    <div>
       <h1 className="m-6 font-bold text-xl ">
        {si} {guban} ( {date} )
       </h1>
       <TailSelect id="sel" selectRef={Ref} handleChange={()=>{}} optionArray={[]}/>
    </div>
  )
}
