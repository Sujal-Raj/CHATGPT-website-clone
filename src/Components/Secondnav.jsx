import React from 'react'

const links = ["Overview","Team","Enterprise","Pricing","Education"]

function Secondnav() {
  return (
    <>
    <div>
        <h2>ChatGPT</h2>
    </div>
    <div className="links flex gap-4">
            {links.map((items,index)=>(
                <a key={index} href="#" className="text-md opacity-70 hover:opacity-100">{items}</a>
            ))}
        </div>
    </>
  )
}

export default Secondnav