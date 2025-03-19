import React, { useEffect } from 'react'

export default function TailCard({ title, subtitle, imgurl, keyword }) {
    const key = keyword.split(', ');
    let tm = key.map(item => 
        <span className="m-1 font-light text-sm bg-gray-300 rounded-md text-gray-700">{item}</span>);
    useEffect(()=>{
        console.log(keyword);
        console.log(tm);
    },[]);
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className='hover:opacity-80'>
                <img className="rounded-t-lg" src={imgurl} alt={title} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                <div>
                    {tm}
                </div>
            </div>
        </div>
    )
}
