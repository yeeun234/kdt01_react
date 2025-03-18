import TailButton from "../UI/TailButton"
import {useState,useEffect, useRef} from "react";
export default function MyRef() {
    //컴포넌트 변수
    let cnt = 0;
    //State 변수
    const[stCnt,setStCnt]=useState(0);
    //Ref 변수
    const refCnt =useRef(0);
    //컴포넌트 변수 증가
    const handlecnt = ()=>{
        cnt = cnt+1;
        console.log("cnt:",cnt);
    };

    //State 변수 증가
    const handleStCnt = ()=>{
        setStCnt(stCnt+1);
        console.log("stCnt handle:",stCnt); //stcnt:0으로 찍히는 이유 : 함수로인해 바뀌기 전에 콘솔에 찍혀서 그럼. 유즈이펙트써야 변ㅅ경후가 제대로 나옴. 
    };

    //Ref 변수 증가 (렌더링은 안일어나지만 스테이트 변수를 눌러서 렌더링이 일어났을땐 화면에 렌더링됨 보통 변수형태보단 폼태그 핸들링에 씀)
    const handleRefCnt = ()=>{
        refCnt.current = refCnt.current+1;
        console.log("refCnt :",refCnt.current );
    };
    //State 변수가 변경되었을때를 찾아 그때마다 함수가 찍힘. / 제일 처음에 로드될때 scnt:0 한번찍고 클릭할때마다 (stcnt가 바뀔때마다) 함수 실행
    useEffect(()=>{ console.log("stCnt UseEffect:"+stCnt);},[stCnt]);
    return (
        <div className="w-full">
            <div className="w-10/12 grid grid-cols-3 gap-4">
                <div>
                    컴포넌트 변수 : {cnt}
                </div>
                <div>
                    State 변수 : {stCnt}
                </div>
                <div>
                    Ref 변수 : {refCnt.current}
                </div>
                <TailButton caption="컴포넌트 변수 증가" color="blue" onClick={handlecnt}></TailButton>
                <TailButton caption="State 변수 증가" color="blue" onClick={handleStCnt}></TailButton>
                <TailButton caption="Ref 변수 증가" color="blue" onClick={handleRefCnt}></TailButton>
                
            </div>
        </div>


    )
}
