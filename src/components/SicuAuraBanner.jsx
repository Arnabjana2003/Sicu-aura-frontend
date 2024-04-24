import React from 'react'
import mapImg from "../assets/5586b48e1c158f42af9fb4b0f5b1c3e2.png"
import sicuAuraImg from "../assets/b27c5c3c589ffa6708563860edcef108.png"

function SicuAuraBanner() {
  return (
    <div className='w-[541px] min-h-screen h-full bg-center bg-cover flex flex-col items-start justify-center' style={{backgroundImage: `url(${mapImg})`}}>
        <div className='flex flex-col items-center'>
        <img src={sicuAuraImg} className='mt-10'/>
        <h2 className='text-white text-4xl font-semibold'>Feel<span className='text-green-500'> Safe </span>Everywhere</h2>
        </div>
    </div>
  )
}

export default SicuAuraBanner