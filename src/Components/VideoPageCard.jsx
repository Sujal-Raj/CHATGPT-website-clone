import React from 'react'

function VideoPageCard({videoCards}) {
  return (
    <div className='min-h-screen pt-28 flex flex-col items-center gap-14 '>
        <p className='text-4xl font-semibold'>{videoCards.heading}</p>
        <div className='w-[80%] h-[80vh] m-auto flex bg-zinc-800 rounded-3xl'>
            <div className="left w-[50%] h-[100%] flex flex-col justify-center pl-10 ">
                <p className='text-2xl font-semibold '>{videoCards.subHeading}</p>
                <p className=' text-xl w-[70%] mt-5'>{videoCards.para} </p>
            </div>
            <div className="right w-[50%] h-[100%] ">
                <video className='w-[100%] h-[100%] object-cover rounded-3xl' autoPlay muted src={videoCards.src}  ></video>
            </div>
        </div>
    </div>
  )
}

export default VideoPageCard