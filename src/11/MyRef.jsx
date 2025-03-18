import TailButton from "../UI/TailButton"
import {useState,useEffect, useRef} from "react";
export default function MyRef() {
    //ref변수 선언
    const refInput1 = useRef();
    const refInput2 = useRef();
    const result = useRef();
    const refselect = useRef();
    //ref 변수를 만들고 각각의 입력요소에 ref 속성을 넣어 연결시킴
    return (
        <div className="w-full flex items-center justify-center">
            <form className= "bg-amber-100 w-10/12 h-full flex justify-center items-center " action="">
                <input ref={refInput1} className="bg-white rounded-lg text-center focus:ring-blue-100 focus:border-blue-200" autoFocus type="number"  />
                <select ref={refselect} name="선택" id="sel" className=" bg-white m-2">
                    <option className="w-full " value="+" selected>+</option>
                    <option className="w-full " value="/" >/</option>
                    <option className="w-full " value="*">*</option>
                    <option className="w-full " value="-">-</option>
                </select>
                <input ref={refInput2} className=" rounded-md bg-white border-amber-950 " type="number" />
                <TailButton  className="" caption="=" color="blue" onClick=""></TailButton>
                <input ref={refInput2} className="rounded-md bg-gray-100 " type="number" readOnly/>
            </form>
        </div>
    )
}
