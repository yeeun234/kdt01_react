import { useParams } from "react-router-dom"
export default function RoutePage1() {
    const { item1, item2 } = useParams();
    console.log(item1, item2);
  return (
    <div>
      {item1=='m' ? "m" :`${item1}는 ${item2}입니다.`}
    </div>
  )
}
