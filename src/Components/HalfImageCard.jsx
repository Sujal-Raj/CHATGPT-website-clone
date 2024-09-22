import React from 'react'

function HalfImageCard({ImageData}) {
  return (
    <div className='min-h-screen pt-28 flex flex-col items-center gap-14 '>
    <div className='w-[80%] h-[80vh] m-auto flex bg-zinc-800 rounded-md'>
            <div className="left w-[50%] h-[100%] flex flex-col justify-center pl-10 ">
                <p className='text-2xl font-semibold '>{ImageData.subHeading}</p>
                <p className=' text-xl w-[70%] mt-5'>{ImageData.para} </p>
            </div>
            <div className="right w-[50%] h-[100%] ">
                {/* <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={ImageData.src}/> */}
                <img className='w-[100%] h-[100%] object-cover rounded-md' src={ImageData.src} alt="" />
            </div>
        </div>
        </div>
  )
}

export default HalfImageCard