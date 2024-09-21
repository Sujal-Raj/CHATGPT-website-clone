import React from 'react'

function ImagePageCard({text, imgSrc}) {
  return (
    <div className='min-h-[100vh] w-full flex flex-col items-center mt-10'>
        <p className='text-4xl font-semibold max-w-[40%] text-center mb-16'>{text}</p>
        <img className='w-[80%] rounded-2xl' src={imgSrc} alt="" />
    </div>
  )
}

export default ImagePageCard