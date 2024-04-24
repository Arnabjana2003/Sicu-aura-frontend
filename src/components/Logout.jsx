import React from 'react'
import { useAuthContext } from '../context/authContext'

function Logout() {
  const {logout} = useAuthContext()
  return (
    <div>
        <button className='px-6 py-2 bg-indigo-900 text-slate-300 rounded-lg' onClick={()=>logout()}>Log out</button>
    </div>
  )
}

export default Logout