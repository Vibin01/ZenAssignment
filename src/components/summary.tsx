import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditNoteIcon from "@mui/icons-material/EditNote";
export default function Summary() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0   w-[380px] bg-gray-100">
      {/* Summary box */}
      <div
        className={`transition-transform duration-300  ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } fixed bottom-0  w-[380px] bg-white shadow-lg rounded-t-3xl`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen
              ? "hidden "
              : "absolute flex px-10  items-center justify-between text-left h-14 w-[380px] top-[-65px] left-1/2 transform -translate-x-1/2  bg-[#ffffff] rounded-t-[25px] p-2 shadow-2xl"
          }`}
        >
          Summary
          <button>
            <KeyboardArrowUpIcon />
          </button>
        </div>
        {/* Content inside sliding box */}
        <div
          className="p-5 w-[380px] h-80 rounded-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between px-5">
            {" "}
            <h2 className="text-md mb-2">Summary </h2>
            <button>
              <KeyboardArrowDownIcon />
            </button>
          </div>
          <div className="flex font-semibold justify-between pt-3 px-5">
            <div className=" ">
              <span className=" text-yellow-400">
                <CheckCircleIcon fontSize="large" />
              </span>
              Goal
              <div className=" text-[15px] font-thin">Healthy Eating</div>
            </div>
            <div className=" text-yellow-400">
              <EditNoteIcon fontSize="large" />
            </div>
          </div>
          <div className="flex font-semibold justify-between pt-3 px-5">
            <div className="">
              <span className=" text-yellow-400">
                <CheckCircleIcon fontSize="large" />
              </span>
              Gender
              <div className="text-[15px] font-thin">Male</div>
            </div>
            <div className=" text-yellow-400">
              <EditNoteIcon fontSize="large" />
            </div>
          </div>
          <button className=" mt-2 w-80 border-gray border-2 text-gray-400">
            BMI
          </button>
        </div>
      </div>
    </div>
  );
}
