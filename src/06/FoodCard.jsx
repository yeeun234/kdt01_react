import React from 'react'
import busan from "../assets/busan.png";
import { useState } from 'react';
export default function FoodCard() {
    const[isShow, setisShow] = useState(false);
    const obj = {
        "구분": "광역지원센터",
        "시군구": "부산시",
        "사업장명": "부산광역푸드뱅크",
        "신고기준": "당연",
        "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
        "연락처(대표번호)": "051-791-1377",
        "팩스번호": "051-714-3096",
        "운영주체 분류": "1. 사회복지법인",
        "운영주체명": "부산광역시사회복지협의회"
    };
    const handle = ()=> {
        setisShow(!isShow);
    };
    return (
        <div className='w-full h-48 flex border border-solid rounded-lg p-1 mb-2'>
            <div className='w-1/3 h-full  '>
                <img src={busan} alt={obj["사업장명"]} className=' w-11/12 h-auto p-3' />
            </div>
            <div className='w-2/3 h-full flex flex-col items-start justify-center p-5 '>
                <div className='h-1/4 flex justify-items-normal  font-bold text-3xl mb-2 '>
                    {obj["사업장명"]}
                </div>
                <h1 className='h-1/4  flex items-center justify-center font-bold p-1 mb-2'>
                    {obj["운영주체명"]}
                </h1>
                <p className='h-1/4 w- full   text-gray-600 mb-3'>
                    {obj["사업장 소재지"]}
                </p>
                <div className='cursor-pointer w-full h-1/4 rounded-lg bg-gray-400 flex items-center p-2 ' onClick={handle}>
                    {isShow&& `Fax : ${obj["팩스번호"]} , Phone : ${obj["연락처(대표번호)"]}`}
                </div>
            </div>
        </div>
    )
}
