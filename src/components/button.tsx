import React from "react";
const data = [
  "Lose Weight",
  " Desi Tiffin Service",
  "Healthy Eating",
  "Gain Muscle",
  "Diabetes Management",
];
const Buttons = () => {
  return (
    <>
      {data.map((value, index) => (
        <div key={index} className="">
          <button className="bg-yellow-400 w-[280px] shadow-lg mb-3 h-[40px] rounded-full ">
            {value}
          </button>
        </div>
      ))}
    </>
  );
};

export default Buttons;
