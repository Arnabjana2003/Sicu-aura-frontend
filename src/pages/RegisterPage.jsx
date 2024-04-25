import React, { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import SicuAuraBanner from "../components/SicuAuraBanner";
import hospitalImg from "../assets/3ad994db5b5e421121cc1ef38e21523e.png";
import PopupBox from "../components/PopupBox";

function RegisterPage() {
  const [loginStat, setLoginStat] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onRegistrationSuccess = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setLoginStat(true);
    }, 1500);
  };

  return (
    <div className="flex w-full h-full">
      //on the signup button is clicked, show the successfull popup
      {showPopup ? <PopupBox /> : null}
      <div>
        <SicuAuraBanner />
      </div>

      <div className="w-full p-16">
        <header className="text-center relative h-10">
          <img src={hospitalImg} className="w-24 absolute -top-7" />
          <div className="cursor-pointer text-3xl font-semibold">
            <h4
              className={`inline mx-3 ${loginStat ? "opacity-30" : null}`}
              onClick={() => setLoginStat((prev) => !prev)}
            >
              Sign Up
            </h4>
            /
            <h4
              className={`inline mx-3 ${!loginStat ? "opacity-30" : null}`}
              onClick={() => setLoginStat((prev) => !prev)}
            >
              Log In
            </h4>
          </div>
        </header>

        <section className="mt-12">
          {loginStat ? <Login /> : <Signup onSubmit={onRegistrationSuccess} />}
        </section>
      </div>
    </div>
  );
}

export default RegisterPage;
