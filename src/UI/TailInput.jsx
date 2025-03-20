

export default function TailInput({Ref}) {


  return (
    <div className='flex justify-center items-center w-5/10 h-15 mr-1'>
      <input  ref={Ref}  className=" border 1px soild bg-white rounded-xs w-full h-10/12 " type="text" autoFocus />
    </div>
  )
}
