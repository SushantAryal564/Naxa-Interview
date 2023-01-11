import React from "react";
import { NavLink } from "react-router-dom";
export const MainNavigation = () => {
  let Links = [
    { name: "Services", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Company", link: "/company" },
    { name: "Event & Media", link: "/events" },
    { name: "Blog", link: "/link" },
  ];
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
            {Links.map((link) => (
              <NavLink
                className="self-center p-4 font-medium text-lg cursor-pointer"
                to={link.links}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="self-center text-[#124af5] bg-[#ffdc1c] font-semibold py-2 px-6">
            Let's Talk
          </div>
        </nav>
      </div>
    </div>
  );
};
