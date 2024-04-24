import React, { useState } from 'react'
import HospitalRegistrationPage from './pages/AdminPage'
import adminApi from './apis/adminApi'
import authApi from './apis/authApis'
import RegisterPage from "./pages/RegisterPage"
import { AuthProvider } from './context/authContext'
import { Outlet } from 'react-router-dom'

function App() {
  const [authData,setAuthData] = useState({status:false,data:{}})
  const login = (loginData)=>{
    setAuthData({status:true,data:loginData})
  }
  const logout = ()=>{
    setAuthData({status:false,data:{}})
  }
  return (
    <AuthProvider value={{authData,login,logout}}>
    <div className='w-screen min-h-screen font-sans overflow-x-hidden'>
      <Outlet/>
    </div>
    </AuthProvider>
  )
}

export default App