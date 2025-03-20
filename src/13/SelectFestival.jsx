import TailInput from '../UI/TailInput'
import { useRef } from 'react'
export default function SelectFestival() {
    const inputRef = useRef();
  return (
    <div>
      <TailInput Ref={inputRef} type="select"></TailInput>
    </div>
  )
}
