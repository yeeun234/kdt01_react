import React from 'react'

export default function TailBall({ n }) {
    const bgColor = {
        "n0" : "bg-red-700",
        "n1" : "bg-yellow-700",
        "n2" : "bg-green-700",
        "n3" : "bg-blue-700",
        "n4" : "bg-indigo-700",
    }
    return (
        <div className={`
            w-16 h-16 ${bgColor["n"+Math.floor(n/10)]} flex justify-center items-center rounded-full text-4xl text-white font-bold p-10 mr-5
        pb-10
            `}>
            {n}
        </div>
    )
}
