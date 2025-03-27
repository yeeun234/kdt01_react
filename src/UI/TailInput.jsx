

export default function TailInput({Ref,type}) {


  return (
    <div className='flex justify-center items-center w-5/10 h-15 mr-1'>
      <input  ref={Ref}  className="  bg-white focus:border-blue-500 rounded-xs w-full h-10/12 " type={type} autoFocus />
    </div>
  )
}
