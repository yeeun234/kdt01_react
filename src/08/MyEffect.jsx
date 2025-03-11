import React from 'react'
import { useEffect ,useState} from 'react'
import TailButtonLine from '../UI/TailButtonLine'
export default function MyEffect() {
const [msg,setMsg] = useState('');
const handle = () =>{

}
    //how to use useEffect 
    //useEffect(()=>{},[]);  in the parameter, need to add 1. callbackfunction / 2. dependency array
    //1.it will execute once when the component was created.(second parameter which is dependency array is empty.)
 
    //2. depends on Certain denpendency array's status, callback function(which is assigned in the first parameter) is executing everytime(when screen was rendering). whithout explicit calling, it will automatically working by react. if dependency array was not changed , it only runs once when the component was loaded. [Certain status variable] 

    //3.will executed everytime depends on [any dependency array's stauts] was changing(when screen was rendering)

return (
    <div className='w-full text-2xl font-bold flex justify-center items-center'>
      <TailButtonLine html="MyEffect" bgColor="orange" onClick={handle}></TailButtonLine>
        MyEffect
    </div>
  )
}
