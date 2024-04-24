import React, { useState } from 'react'
import adminApi from '../apis/adminApi'
import searchIcon from "../assets/searchIcon.svg"

function SearchField({setData}) {
    const [text,setText] = useState("")
    const [clear,setClear] = useState(false)
    const handleSearch = ()=>{
        adminApi.search(text)
        .then((res)=>{
            const newData = res.data.map(data=>{
              const {_id,createdAt,...rest} = data;
              const created = new Date(data.createdAt)
              const localTime = created.toLocaleString('en-IN')
              return {...rest,"Date & Time":localTime}
            })
            setData(newData)
          })
    }
  return (
    <div className='relative'>
        <input type='text' placeholder='Search' className=' outline-none shadow-lg w-72 rounded-xl p-2 border' value={text} onChange={(e)=>setText(e.target.value)}/>
        <div className='absolute top-0 bottom-0 right-3 flex justify-center items-center gap-4 p-1'>
        {clear && <button className=''>X</button>   }
        <button className='' onClick={handleSearch}>
          <img src={searchIcon} className='w-4'/>
        </button>
        </div>
    </div>
  )
}

export default SearchField