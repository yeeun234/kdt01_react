import MyDiv3 from "./MyDiv3"
export default function MyDiv2() {
  return (
    <div className="w-8/10 h-8/10 
                    bg-lime-700 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-start items-center">
      <div className="w-full text-left mb-10">
        MyDiv2
      </div>

      {/* //div2는 프롭스를 안쓰지만 자식에서 쓰기에 전달받고 상속함. 프롭스 드릴링*/}
      <MyDiv3 />
    </div>
  )
}