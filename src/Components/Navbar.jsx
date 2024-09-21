import React from 'react'
import { IoIosSearch } from "react-icons/io";

const links = ["Research","Product","Safety","Company"]

function Navbar() {
  return (
    <>
    <div className='h-[10vh] flex items-center justify-between px-4'>
        <div className="icon h-[100%]">
            <a href=""><img className='h-[100%]' src="../src/assets/logo.png" alt="" /></a>
        </div>  
        <div className="links flex gap-4">
            {links.map((items,index)=>(
                <a key={index} href="#" className="text-md hover:opacity-70">{items}</a>
            ))}
        </div>
        <div className="searchbtn">
            <IoIosSearch  className="text-2xl hover:cursor-pointer" />

        </div>
    </div>
    </>
  )
}

export default Navbar