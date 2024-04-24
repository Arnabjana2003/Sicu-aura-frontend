import React from 'react'

function PopupBox() {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-50 opacity-[0.97] z-50 flex justify-center items-center'>
        <div className='bg-slate-200 p-10 h-44 rounded-xl flex justify-center items-center flex-col'>
          <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/15-512.png" className='w-14'/>
            <p className='text-2xl mt-2'>Your registration has been successful</p>
        </div>
    </div>
  )
}

export default PopupBox