import React from "react";

export const MainNavigation = () => {
  return (
    <div className="absolute w-full">
      <div className="max-w-[90%] w-full px-[15px] mx-auto pt-2">
        <nav className="flex justify-between content-center">
          <div>
            <img
              src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"
              className="w-full"
            />
          </div>
          <div className="flex justify-between content-center">
            <div className="self-center p-4 font-medium text-lg cursor-pointer">
              Services
            </div>
            <div className="self-center p-4 font-medium text-lg cursor-pointer">
              Portfolio
            </div>
            <div className="self-center p-4 font-medium text-lg cursor-pointer">
              Company
            </div>
            <div className="self-center p-4 font-medium text-lg cursor-pointer">
              Events & Media
            </div>
            <div className="self-center p-4 font-medium text-lg cursor-pointer">
              Blog
            </div>
          </div>
          <div className="self-center text-[#124af5] bg-[#ffdc1c] font-semibold py-2 px-6">
            Let's Talk
          </div>
        </nav>
      </div>
    </div>
  );
};
