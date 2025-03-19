import React from 'react'
import TailButton from '../UI/TailButton'

export default function GalleryNav() {
    return (
        <div className='w-8/10 h-full flex-col justify-center items-center mt-5 bg-gray-50'> 
            <h1 className='text-2xl font-bold inline-flex justify-center items-center mt-10'>한국관광공사 관광 사진 정보</h1>
            <div className='flex justify-center items-center w-full h-15   m-2 '>
                <input className="bg-white rounded-xs w-5/10 h-10/12 mr-2" type="text" autoFocus />
                <TailButton caption="확인" color="blue" />
                <TailButton caption="취소" color="blue" />
            </div>
        </div>
    )
}
