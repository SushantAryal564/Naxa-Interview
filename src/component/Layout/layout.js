import React, { Fragment } from "react";
import { MainNavigation } from "./MainNavigation";

export const Layout = (props) => {
  return (
    <Fragment>
      <div className="xxl:text-basefont xxl:leading-6 font-naxaFont leading-6 text-basefont text-[#333132] font-normal bg-[#f4f4f4] p-0 m-0 box-border">
        <MainNavigation />
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
};
export default Layout;
