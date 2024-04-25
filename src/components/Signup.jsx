import React, { useState } from "react";
import authApi from "../apis/authApis";

const InputField = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  required = true,
}) => {
  if (type == "file") {
    return (
      <div className="flex flex-col mt-5">
        <label className="text-xl text-slate-400 ml-5">Registration Certificate</label>
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className="w-72  pb-2 border-b outline-none mx-10 ml-5 mt-1"
        />
      </div>
    );
  }
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className="w-72 text-xl pb-2 border-b outline-none mx-10 ml-5 mt-10"
    />
  );
};

//array of all input fields on which the InptField will be mapped
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
    name: "address",
    placeholder: "Address",
  },
  {
    name: "phone",
    placeholder: "Phone Number",
  },
  {
    name: "city",
    placeholder: "City",
  },
  {
    name: "registrationNumber",
    placeholder: "Registration Number",
  },
  {
    name: "state",
    placeholder: "State",
  },
  {
    name: "emergencyNumber",
    placeholder: "Emergency-Ward Number",
  },
  {
    name: "pincode",
    placeholder: "Pincode",
  },
  {
    type: "file",
    name: "registrationCertificateLink",
    placeholder: "registrationCertificateLink",
    required: false,
  },
  {
    name: "registrationDate",
    placeholder: "Registration Date",
  },
  {
    name: "createPassword",
    placeholder: "Create Password",
    type: "password",
  },
  {
    name: "numberOfAmbulace",
    placeholder: "Number of Ambulance available",
  },
  {
    name: "password",
    placeholder: "Confirm Password",
  },
];
const initialValue = {
  hospitalName: "",
  email: "",
  address: "",
  phone: "",
  city: "",
  registrationNumber: "",
  state: "",
  emergencyNumber: "",
  pincode: "",
  registrationDate: "",
  numberOfAmbulace: "",
  password: "",
  registrationCertificateLink: "",
};



function Signup({ onSubmit }) {

  const [loading,setLoading] = useState(false)
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(false);

  //for input text change and update the data object with latest value
  const handleInput = (key, value) => {
    setData({ ...data, [key]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true)

    //check if the new password and confirm password same or ot
    if (data.password !== data.createPassword) {
      setLoading(false)
      return setError("Incorrect confirm password");
    }

    //call backend api to register new hospital with the data
    authApi
      .register(data)
      .then(() => onSubmit())
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      })
      .finally(()=>setLoading(false))
  };

  return (
    <div>
      <form className="flex flex-wrap" onSubmit={handleSubmit}>
        {inputArr.map((input, index) => (
          <div key={index}>
            <InputField
              type={input?.type}
              name={input.name}
              placeholder={input.placeholder}
              value={data[input.name]}
              onChange={handleInput}
              required={input.required}
            />
          </div>
        ))}
        <div className="flex flex-col items-center justify-center w-full mt-5">
          {error && <p className="mb-8 text-red-500">{error}</p>}
          <button
            className="px-8 py-2 rounded-lg bg-slate-800 text-white text-lg font-semibold disabled:bg-slate-400"
            type="submit"
            disabled={loading}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
