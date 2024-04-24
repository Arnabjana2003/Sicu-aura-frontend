import React from 'react'

function ProfileImgIcon({src,name}) {
  return (
    <div className='flex gap-2 items-center'>
        <div className='w-12 h-12 rounded-full bg-black overflow-hidden'>
        <img src={src} className='w-full'/>
        </div>
        <h4 className='text-lg font-semibold text-white'>{name}</h4>
    </div>
  )
}

export default ProfileImgIcon