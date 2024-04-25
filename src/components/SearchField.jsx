import React, { useState } from 'react'
import adminApi from '../apis/adminApi'
import searchIcon from "../assets/searchIcon.svg"

function SearchField({setData}) {
    const [text,setText] = useState("")


    const handleSearch = ()=>{
        adminApi.search(text)
        .then((res)=>{
            const newData = res.data.map((data,index)=>{

              //get the data exclude the _id field as it is not required to show on the table
              //change the createdAt field with Date&Time as per the design
              const {_id,createdAt,...rest} = data;

              const created = new Date(data.createdAt)
              const localTime = created.toLocaleString('en-IN')


              return {"No.":index+1,...rest,"Date & Time":localTime} //adding No. and overwriting to Date and Time
            })
            setData(newData)
          })
    }
  return (
    <div className='relative'>
        <input type='text' placeholder='Search' className=' outline-none shadow-lg w-72 rounded-xl p-2 border' value={text} onChange={(e)=>setText(e.target.value)}/>
        <div className='absolute top-0 bottom-0 right-3 flex justify-center items-center gap-4 p-1'>
        <button className='' onClick={handleSearch}>
          <img src={searchIcon} className='w-4'/>
        </button>
        </div>
    </div>
  )
}

export default SearchField