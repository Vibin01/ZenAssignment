"use client";
import { useState } from "react";
import { Header } from "@/components/header";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PhoneIcon from "@mui/icons-material/Phone";
import Cards from "@/components/cards";
import Main from "@/components/button";
import Buttons from "@/components/button";
import Summary from "@/components/summary";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex text-center justify-center h-screen  ">
        <div className="container  bg-[#ffffffe9] w-[400px] ">
          <div className="m-1 pb-0 p-1">
            <Header />
          </div>
          <div className="p-2 pr-0 bg-gray-100 h-screen">
            <div className=" flex justify-between">
              <button className="pl-3 text-yellow-400">
                <ArrowBackIosIcon />
              </button>
              <p className="content-center text-[#00000088]">Personalize</p>
              <button
                onClick={toggleModal}
                className="bg-yellow-400 text-black  px-2 py-2  rounded-l-full rounded-r-none"
              >
                <PhoneIcon style={{ width: 20, marginRight: 9 }} />
              </button>
              {isOpen && (
                <div className="fixed   ">
                  <div className="bg-white w-96 rounded-lg shadow-lg  p-5">
                    <button
                      onClick={toggleModal}
                      className="absolute  right-3 text-gray-500 hover:text-gray-700"
                    >
                      <CloseIcon />
                    </button>

                    <h2 className="text-lg text-black font-semibold text-center">
                      Request for a callback
                    </h2>
                    <p className="text-sm text-center text-gray-600 mt-1">
                      Our team will contact you shortly to solve your queries
                      and find the key to your health.
                    </p>

                    <form className="space-y-4 mt-5">
                      <div className="flex items-center bg-gray-200 rounded-full px-3 py-2">
                        <PersonIcon className="text-gray-500" />
                        <input
                          type="text"
                          placeholder="Name"
                          className="flex-1 bg-transparent outline-none px-2 text-sm"
                        />
                      </div>
                      <div className="flex items-center bg-gray-200 rounded-full px-3 py-2">
                        <EmailIcon className="text-gray-500" />
                        <input
                          type="email"
                          placeholder="Email"
                          className="flex-1 bg-transparent outline-none px-2 text-sm"
                        />
                      </div>
                      <div className="flex items-center bg-gray-200 rounded-full px-3 py-2">
                        <PhoneIcon className="text-gray-500" />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="flex-1 bg-transparent outline-none px-2 text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-full shadow-lg"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-wrap content-center justify-center text-black ">
              <div>
                <div className="text-[22px] font-bold ">How it works?</div>
                <div className="text-[14px] text-[#00000051]">
                  1 Lakh plus Happy Customers Served
                </div>
              </div>

              <div className="card">
                <Cards />
              </div>
              <div className="main">
                <div className="text-[24px] font-bold mt-3">Your Goal</div>
                <div className="text-[13px] text-[#00000088] my-2">
                  Please Select One
                </div>
                <Buttons />
              </div>
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
