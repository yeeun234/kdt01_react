import TailButtonLine from '../UI/TailButtonLine'

export default function TrafficNav({title,c,selc,setselc}) {
    console.log("TrafficNav" , c)
    if (c == undefined) return (<></>)

    const bts = c.map((item => <TailButtonLine
        key={item}
        bgColor={selc == item ? "orange" : "blue"}
        html={item}
        onClick={() => setselc(item)}
    />));

    return (
        
            <div className='flex w-full items-center '>
                <div className='  justify-start font-bold text-2xl pl-10 '>
                교통사고 {title}
                </div>
                <div className=' flex-grow flex items-center justify-end pr-10 space-x-2'>
                    {bts}
                </div>
            </div> 
        
    )
}
