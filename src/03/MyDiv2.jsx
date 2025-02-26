import MyDiv3 from "./MyDiv3"
export default function MyDiv2({m1, m2, m3}) {
  return (
    <div className=" w-8/10 h-8/10 pt-1 bg-amber-300 flex flex-col items-center justify-start">
           
        MyDiv2
        <MyDiv3 b1 = {m1} b2 = {m2} b3 ={m3} />
      {`${m1} > ${m2}`}
    </div>
  )
}
