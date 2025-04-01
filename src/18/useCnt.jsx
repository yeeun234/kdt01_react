
import { create } from "zustand";

export const useCnt = create( (set) => ({
  cnt : 0,

  //{오브젝트라서 키:값,키:값 형태 . 함수도 값으로 넣기가능 increase : ()=> set() 셋함수 콜.근데 그 안에 또 함수가 들어가고 그 안에 오브젝트가.}

  increase : () => set((state) => ({cnt : state.cnt + 1})) ,
  decrease : () => set((state) => ({cnt : state.cnt - 1})) ,
  reset : () => set({cnt : 0}) ,
})) ;