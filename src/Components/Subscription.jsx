import React, { useState } from "react";

const Subscription = () => {
    const [showPopup, setShowPopup] = useState(false);
  function handlePopup() {
    setShowPopup(!showPopup);
  }
  return (
    <div className="w-full min-h-screen p-[15px] bg-white rounded-[10px]">
      <div className="rounded-lg mb-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[28px] font-medium mb-[5px]">Subscription</h1>
            <p className="text-base font-normal opacity-[70%]">
              Plan, prioritize, and accomplish your tasks with ease.
            </p>
          </div>
          <button onClick={handlePopup} className="bg-[#0832DE] font-normal text-base text-white py-3 px-[15px] rounded-[10px] mt-3 float-right">
            <span className="me-3">+</span> Add Plan
          </button>
        </div>
      </div>
      <div className="flex gap-[15px]">
        <div className="w-4/12 bg-gradient-to-r from-[#8970F2] to-[#321A95] p-5 rounded-[10px]">
          <h1 className="text-center text-[26px] font-semibold text-white">
            STANDARD
          </h1>
          <div className="border-t-[1px] border-dashed border-white my-2.5"></div>
          <p className="text-center font-normal text-xs text-white">
            Lorem ipsum dolor sit amet consectetur. Consequat ullamcorper
            accumsan nibh{" "}
          </p>
          <p className="text-white text-center mt-[15px] leading-[80px] border-[1px] border-dashed border-[#FFFFFF4D] rounded-[10px]">
            <sup className="text-xl font--normal">₹</sup>
            <span className="text-[64px] font-semibold">99</span>
            <sub className="text-xl font-normal">/2 Year</sub>
          </p>
          <p className="mt-[15px] text-[#FFFFFF99] text-base font-normal">How It Works?</p>
          <div className="flex items-center gap-[15px] mt-[15px]">
           <div>
           <div className="rounded-[50px] text-white h-[24px] w-[24px] bg-[#382488] text-sm font-normal flex items-center justify-center"><span>1</span></div>
           </div>
            <p className="text-sm font-normal text-[#FFFFFF99]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex items-center gap-[15px] mt-[15px]">
           <div>
           <div className="rounded-[50px] text-white h-[24px] w-[24px] bg-[#382488] text-sm font-normal flex items-center justify-center"><span>2</span></div>
           </div>
            <p className="text-sm font-normal text-[#FFFFFF99]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex items-center gap-[15px] mt-[15px]">
           <div>
           <div className="rounded-[50px] text-white h-[24px] w-[24px] bg-[#382488] text-sm font-normal flex items-center justify-center"><span>3</span></div>
           </div>
            <p className="text-sm font-normal text-[#FFFFFF99]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="w-4/12 bg-gradient-to-r from-[#B870F2] to-[#3A1479] p-5 rounded-[10px]">
          <h1 className="text-center text-[26px] font-semibold text-white">
          PREMIUM
          </h1>
          <div className="border-t-[1px] border-dashed border-white my-2.5"></div>
          <p className="text-center font-normal text-xs text-white">
            Lorem ipsum dolor sit amet consectetur. Consequat ullamcorper
            accumsan nibh{" "}
          </p>
          <p className="text-white text-center mt-[15px] leading-[80px] border-[1px] border-dashed border-[#FFFFFF4D] rounded-[10px]">
            <sup className="text-xl font--normal">₹</sup>
            <span className="text-[64px] font-semibold">199</span>
            <sub className="text-xl font-normal">/2 Year</sub>
          </p>
          <p className="mt-[15px] text-[#FFFFFF99] text-base font-normal">How It Works?</p>
          <div className="flex items-center gap-[15px] mt-[15px]">
           <div>
           <div className="rounded-[50px] text-white h-[24px] w-[24px] bg-[#382488] text-sm font-normal flex items-center justify-center"><span>1</span></div>
           </div>
            <p className="text-sm font-normal text-[#FFFFFF99]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex items-center gap-[15px] mt-[15px]">
           <div>
           <div className="rounded-[50px] text-white h-[24px] w-[24px] bg-[#382488] text-sm font-normal flex items-center justify-center"><span>2</span></div>
           </div>
            <p className="text-sm font-normal text-[#FFFFFF99]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex items-center gap-[15px] mt-[15px]">
           <div>
           <div className="rounded-[50px] text-white h-[24px] w-[24px] bg-[#382488] text-sm font-normal flex items-center justify-center"><span>3</span></div>
           </div>
            <p className="text-sm font-normal text-[#FFFFFF99]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      {showPopup && (
        <>
          <div
            onClick={()=>handlePopup()}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 h-[368px] w-[448px] m-auto">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
              <button
                onClick={handlePopup}
                className="absolute top-2 right-2 text-gray-600 hover:text-black"
                aria-label="Close"
              >
                &#10005;
              </button>

              <div className="mb-6">
                <label
                  htmlFor="status"
                  className="block text-base font-normal text-gray-700 mb-2.5"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Block">Block</option>
                  <option value="Unblock ">Unblock</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="reason"
                  className="block font-normal text-base mb-2.5"
                >
                  Reason
                </label>
                <textarea
                  name="reason"
                  placeholder="type here.."
                  className="w-full h-28 px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#0832DE] text-base text-white font-medium py-3 rounded-[10px]">
                Update Status
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Subscription;
