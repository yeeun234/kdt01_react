
export default function TailButtonLine({html,bgColor,onClick}) {
    const boarderCo = {
        "orange" :  "border-orange-300",
        "blue" : "border-blue-200",
        "n" : "",
    }
    const bgCo = {
        "orange" :  "bg-orange-100",
        "blue" : "bg-blue-100",
        "n" : "",
    }
    return (
    <div className='flex  w-full h-full justify-center items-center bg-amber-50'>
      <button className={`w-10 h-10 border border-solid ${boarderCo[bgColor]} ${bgCo[bgColor]} rounded-md onClick=${onClick}`}>
        {html}
      </button>
    </div>
  )
}
