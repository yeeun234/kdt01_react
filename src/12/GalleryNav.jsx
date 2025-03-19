import TailButton from '../UI/TailButton'
import { useEffect ,useRef } from 'react'
import { PiGlobeSimpleThin } from "react-icons/pi";



export default function GalleryNav() {
    const inputk = useRef();
    useEffect(()=>{
        inputk.current.focus();
    },[]);

    const onSearch = (e) => {
        console.log("input" ,inputk.current.value); //확인 클릭시 입력값 콘솔에출력
        let info = encodeURIComponent(inputk.current.value); //한글을 인코딩
        console.log("info" ,info);
    }

    return (
        <div className='w-8/10 h-full flex-col justify-center items-center mt-5 bg-gray-50'> 
            <h1 className='text-2xl font-bold inline-flex justify-center items-center mt-10'>한국관광공사 관광 사진 정보 <PiGlobeSimpleThin />
            </h1>
            <div className='flex justify-center items-center w-full h-15   m-2 '>
                <input ref={inputk}  className=" border 1px soild bg-white rounded-xs w-5/10 h-10/12 mr-2" type="text" autoFocus />
                <TailButton caption="확인" color="blue" onClick={onSearch} />
                <TailButton caption="취소" color="blue" />
            </div>
        </div>
    )
}
