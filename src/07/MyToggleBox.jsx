import React from 'react'
import TailButtonLine from '../UI/TailButtonLine'
import { useState } from "react"

export default function MyToggleBox({html}) {
    const bg700 = {
        "blue" :"bg-blue-500",
        "orange" : "bg-orange-500",
    }
    const [bg,setBg]=useState(false);
    const Click = ()=>{
        setBg(!bg);
    };
    return (
        <>
            <div className={` m-2 w-10/12 h-11/12 flex flex-col justify-center items-center border border-solid ${bg&&bg700[html]}`}>
                <TailButtonLine bgColor="n" html={html} onClick={Click}></TailButtonLine>
                <TailButtonLine bgColor={html} html={`${html} Toggle`} onClick={Click}></TailButtonLine>
            </div >
        </>
    )
}

