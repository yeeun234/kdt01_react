import React from 'react'
import MyToggleBox from './MyToggleBox'
export default function MyToggle() {
  return (
    <div className=' w-11/12  justify-center items-center  grid grid-cols-2 gap-4 fborder border-solid   '>
      <MyToggleBox html="orange"></MyToggleBox>
      <MyToggleBox  html="blue"></MyToggleBox>
    </div>
  )
}
