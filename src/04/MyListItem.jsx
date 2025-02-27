import { IoHeart } from "react-icons/io5";
import { useState } from "react";
//state 변수
//1.usestate Hook import
export default function MyListItem({ title, imgUrl, content ,show}) {
    let cnt = 0;
     //2. state 변수 선언 [변수명, 변수를 변경할 함수명] useState(변수초기값) 
     const [stcnt, setCnt] = useState(0);
    const handleclick = () => {

        cnt = cnt + 1;
        //3. state 변수 변경 (rnedl dlfjgrp godigksmsdldb . private classs의field값을바꾸려면 함수를써서해야하는것처럼. 내부메소드를 이용해 바꾸어야함. stcnt+1;으로 외부에서 못바꿈.외부에서 접근불가 ㅇ그러니 const.)
        setCnt(stcnt +1);

        console.log(cnt);
    };

    return (
        <div className="flex w-full h-auto m-2 border-2 border-gray-300 rounded-md">
            <div className="w-1/3 h-auto p-3">
                <img src={imgUrl} alt={title}  />
            </div>
            <div className="w-2/3 h-full flex flex-col">
                <h1 className=" h-1/4 flex justify-start p-3 font-bold text-3xl">{title}</h1>
                <p className=" h-2/4 font-light text-[15px]  flex flex-col items-center justify-center p-5">{content}</p>
                <div className=" h- 1/4 font-bold text-[12px] flex justify-end items-center px-5 py-4">
                <h1 className="m-1 text-[20px] hover:cursor-pointer hover:text-2xl" onClick={handleclick}>
                    {show && `❤ 좋아요 ${stcnt}`}</h1>
                </div>
            </div>
        </div>
    )
}
