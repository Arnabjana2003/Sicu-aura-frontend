import React from 'react'

function PopupBox() {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-100 opacity-90 z-50 flex justify-center items-center'>
        <div className='bg-slate-400 w-[22rem] h-52 rounded-xl flex justify-center items-center'>
            <p>Registration Successfull</p>
        </div>
    </div>
  )
}

export default PopupBox