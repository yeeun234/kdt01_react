import { useLocation,useSearchParams } from "react-router-dom"
export default function RoutePage2() {
  const loc = useLocation();
  console.log("loc",loc);
  const [ser] = useSearchParams();
  // console.log("ser",ser);

  // const qlist = [...ser];
  // console.log("qlist",qlist);
  // console.log("qlist",qlist[0][1]);

  let item1 = ser.get("item1");
  let item2 = ser.get("item2");
  return (
    <div>
      {!item1 ? "메뉴를 선택하셨습니다." : `${item1}는 ${item2}입니다.`}
    </div>
  )
}
