import React from 'react'

export default function TailButton({ caption, color, onClick }) {
  const bgColor = {
    "blue": "bg-blue-600",
    "yellow": "bg-yellow-600",
    "pink": "bg-pink-500",
    "green": "bg-green-600",
  }
  const bgHover = {
    "blue": "hover:bg-blue-400",
    "yellow": "hover:bg-yellow-400",
    "pink": "hover:bg-pink-300",
    "green": "hover:bg-green-400",
  }
  return (
    <div className=' m-2 flex flex-row justify-center items-center' >
      <button className={` h-12 ${bgColor[color]} ${bgHover[color]} flex justify-center 
       items-center rounded-md  cursor-pointer text-lg
       text-white py-2 px-4 mx-2  `}
        onClick={onClick}>
          {caption}
        </button>
    </div>
  )
}
