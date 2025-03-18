import TailButton from "../UI/TailButton"
import {useState,useEffect, useRef} from "react";
export default function MyRef() {
    //ref변수 선언
    const refInput1 = useRef();
    const refInput2 = useRef();
    const refResult = useRef();
    const refselect = useRef();
    //ref 변수를 만들고 각각의 입력요소에 ref 속성을 넣어 연결시킴

    //컴포넌트 생성시 입력상자에 포커스  (오토포커스 써도 되지만)
    useEffect(()=>{ 
        refInput1.current.focus(); //렌더링되면 유즈이펙트는 일단 함수를 실행하니.
        handleCal
    },[]);

    //계산

    const handleCal = (e) =>{
        e.preventDefault(); //폼은 값이없으면 자기자신을 도니 이걸해야함
        const RefInput1 = parseInt(refInput1.current.value);
        const RefInput2 = parseInt(refInput2.current.value); //산수 해야하니 인트로 바꾸기
        
        
        switch (refselect.current.value){
            case "+" : refResult.current.value = RefInput1 + RefInput2; break;
            case "-" : refResult.current.value = RefInput1 - RefInput2; break;
            case "/" : refResult.current.value = RefInput1 / RefInput2; break;
            case "*" : refResult.current.value = RefInput1 * RefInput2; break;

        }

        console.log("값 :",RefInput1,Refselect,RefInput2,RefResult)

    }
    return (
        <div className="w-full h-1/12 flex items-center justify-center">
            <form className= "bg-amber-100  w-10/12 h-full flex justify-center items-center " action="">
                <input ref={refInput1} className="bg-white h-7/10 rounded-lg text-center focus:ring-blue-100 focus:border-blue-200" autoFocus type="number"  />
                <select ref={refselect} name="선택" id="sel" className=" h-7/10 w-1/17 bg-white m-2">
                    <option className="w-full " value="+" selected>+</option>
                    <option className="w-full " value="/" >/</option>
                    <option className="w-full " value="*">*</option>
                    <option className="w-full " value="-">-</option>
                </select>
                <input ref={refInput2} className=" rounded-md bg-white h-7/10 border-amber-950 " type="number" />
                <TailButton  className="" caption="=" color="blue" onClick={handleCal}></TailButton>
                <input ref={refResult} className="rounded-md bg-gray-100 h-7/10 border border-gray-50" type="number" readOnly/>
            </form>
        </div>
    )
}
