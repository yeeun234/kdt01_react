import React from 'react'
import TailButtonLine from '../UI/TailButtonLine'

export default function MyToggleBox() {
    return (
        <>
            <div className=' m-2 w-5/12 h-11/12 flex justify-center items-center border border-solid '>
                <TailButtonLine bgColor="n" html="blue"></TailButtonLine>
                <TailButtonLine bgColor="blue" html="My Toggles"></TailButtonLine>
            </div >
            <div className=' m-2 w-5/12 h-11/12 flex justify-center items-center border border-solid '>
            <TailButtonLine bgColor="n" html="orange"></TailButtonLine>
            <TailButtonLine bgColor="orange" html="My Toggles" onClick={()=>{}}></TailButtonLine>
            </div >
        </>
    )
}

