import React, { useEffect, useState } from 'react'
import sicuAuraImg from "../assets/b27c5c3c589ffa6708563860edcef108.png"
import ProfileImgIcon from '../components/ProfileImgIcon'
import Logout from '../components/Logout'
import manImg from "../assets/bc187385a649e42acf686a7116e83d56.png"
import { useAuthContext } from '../context/authContext'
import {useNavigate} from "react-router-dom"
import adminApi from "../apis/adminApi"
import Table from '../components/Table'
import SearchField from '../components/SearchField'




function AdminPage() {

const navigate = useNavigate()
const [data,setData] = useState([])
const [isSorted,setIsSorted] = useState(false)
  
  const {authData} = useAuthContext()
  useEffect(()=>{
    if(!authData.status) return navigate("/");
    adminApi.getAllHospitals()
    .then(res=>{
      const newData = res.data.map(data=>{
        const {_id,createdAt,...rest} = data;
        const created = new Date(data.createdAt)
        const localTime = created.toLocaleString('en-IN')
        return {...rest,"Date & Time":localTime}
      })
      setData(newData)
    })
  },[authData])

  const sort = ()=>{
    const sorted = [...data].sort((a,b)=>{
      if(!isSorted){
        if(a.hospitalName<b.hospitalName) return -1
      if(a.hospitalName>b.hospitalName) return 1
      }else{
        if(a.hospitalName>b.hospitalName) return -1
      if(a.hospitalName<b.hospitalName) return 1
      }
      return 0
    })
    setData(sorted)
    setIsSorted(prev=>!prev)
  }



  return (
    <div>
        
        <header className=' bg-indigo-950'>
        <div className='w-[85%] mx-auto flex justify-between'>
            <div className='w-20 '>
                <img src={sicuAuraImg}/> 
            </div>
            <div className='flex gap-10 items-center'>
                <ProfileImgIcon src={authData.data.imgSrc} name={authData.data.hospitalName}/>
                <Logout/>
            </div>
            </div>
        </header>

       <section className='w-[85%] mx-auto'>
       <div className='flex justify-end p-5'>
            <img src={manImg} className='w-28'/>
        </div>
        <div className='flex justify-between'>
            <h1 className='text-4xl font-semibold text-slate-600'>Hospital Registrations</h1>
            <div className='flex items-center gap-8'>
                <div>
                    <SearchField setData={setData}/>
                </div>
                <button className='p-2 border rounded-xl shadow-lg' onClick={sort}>Sort</button>
            </div>
        </div>


        <div>
            <Table data={data}/>
        </div>
       </section>
    </div>
  )
}

export default AdminPage