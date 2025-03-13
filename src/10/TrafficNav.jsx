import React from 'react'

export default function TrafficNav({html,color,onClick}) {
    const boarderCo = {
        "orange": "border-orange-300",
        "blue": "border-blue-300",
        "n": "bg-white-300",
      }
      const bgCo = {
        "orange": "bg-orange-100",
        "blue": "bg-blue-100",
        "n": "bg-white",
      }

    return (
        <div className='flex   justify-center items-center '>
            <button className={`p-2 m-1 border border-solid ${boarderCo[color]} ${bgCo[color]} rounded-md ${color !== "n" && "hover:font-bold"}`} onClick={onClick}>
                {html}
            </button>
        </div> 
    )
}
