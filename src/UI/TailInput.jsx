import React from 'react'
import { useRef,useEffect } from 'react'

export default function TailInput() {

    const input = useRef();
    //검색창 포커스
    useEffect(()=>{
        input.current.focus();
    },[]);
  return (
    <div className='flex justify-center items-center w-5/10 h-15 mr-1'>
      <input  ref={input} className=" border 1px soild bg-white rounded-xs w-full h-10/12 " type="text" autoFocus />
    </div>
  )
}
