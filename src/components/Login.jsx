import React, { useState } from 'react'
import authApi from '../apis/authApis';
import { useAuthContext } from '../context/authContext';
import ImgCapture from './ImgCapture';
import {useNavigate} from "react-router-dom"

const InputField = ({ type = "text", placeholder, name, value, onChange,required=true }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={(e) => onChange(name, e.target.value)}
      className="w-[20rem] text-xl pb-2 border-b outline-none mx-10 ml-5 mt-10"
    />
  );
};
const inputArr = [
  {
    name: "hospitalName",
    placeholder: "Hospital Name",
  },
  {
    name: "email",
    placeholder: "Email Id",
  },
  {
    name: "password",
    placeholder: "Password",
    type:"password"
  },
  {
    name: "accessCode",
    placeholder: "Special Access Code",
    required:false
  },
]
const initialValue = {hospitalName:"",email:"",password:"",accessCode:""}



function Login() {
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const {login} = useAuthContext()
  const [data, setData] = useState(initialValue);
  const [openCam,setOpenCam] = useState(false)
  const handleInput = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false)
    authApi.login(data)
    .then(()=>setOpenCam(true))
    .catch((err)=>setError(err.response.data.message))
  };
  const onCapture = (imgSrc)=>{
    const loginData = {...data,imgSrc}
    login(loginData)
    navigate("/admin")
  }
 if(openCam) return <div><ImgCapture onCapture={onCapture}/></div>
 return (
  <div className='flex flex-col items-center border rounded-3xl shadow-2xl w-fit p-10 mx-auto mt-16'>
    <div className='text-center'>
      <h3 className='text-2xl font-semibold my-3'>Welcome to Sicu-aura</h3>
      <p className='opacity-50'>Your one stop safety solutions using innovative technologies</p>
    </div>
       <form className="" onSubmit={handleSubmit}>
      {inputArr.map((input, index) => (
        <div key={index}>
          <InputField
            required={input?.required}
            type={input?.type}
            name={input.name}
            placeholder={input.placeholder}
            value={data[input.name]}
            onChange={handleInput}
          />
        </div>
      ))}
      <div className="flex flex-col items-center justify-center w-full mt-5">
          {error && <p className="mb-8 text-red-500">{error}</p>}
          <button className="px-8 py-2 rounded-lg bg-slate-800 text-white text-lg font-semibold" type="submit">
            Sign Up
          </button>
        </div>
    </form>
  </div>
)
}

export default Login