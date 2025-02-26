import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {
    let d1 = "diev1";
    let d2 = "dieev2";
    let d3 = "diddv3";
 
  return (
    <div className="w-8/10 h-8/10 pt-1 bg-amber-200 flex flex-col items-center justify-start ">
      MyDiv1 
      {d1}
      <MyDiv2 m1={d1} m2={d2} m3={d3}/>
    </div>
  )
}
