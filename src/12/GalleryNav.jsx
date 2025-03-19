import React from 'react'
import TailButton from '../UI/TailButton' 

export default function GalleryNav() {
  return (
    <div className='flex justify-center items-center w-full h-15  bg-amber-300 m-10'>
      <input className="bg-white rounded-xs w-5/10 h-10/12 mr-2" type="text" autoFocus/>
        <TailButton caption="확인" color="blue" />
        <TailButton caption="취소" color="blue" />
    </div>
  )
}
