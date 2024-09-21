import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Button({value}) {
  return (
    <>
    <button className=' bg-white  rounded-2xl px-2 py-1 flex items-center gap-1 text-black font-semibold hover:bg-zinc-900 hover:text-white'>{value}<MdArrowOutward className='font-bold'/> </button>
    </>
  )
}

export default Button