import TailButtonLine from '../UI/TailButtonLine'

export default function TrafficNav({title,c,selc,setselc}) {
    console.log("TrafficNav" , c)
    if (c == undefined) return (<></>)

    const bts = c.map((item => <TailButtonLine
        key={item}
        color={selc == item ? "orange" : "blue"}
        html={item}
        onClick={() => setselc(item)}
    />));

    return (
        <div className=' w-full flex '>
            <div>
            교통사고 {title}
            </div>
            <div className=' w-full flex items-center justify-between'>
                {bts}
            </div>
        </div> 
    )
}
