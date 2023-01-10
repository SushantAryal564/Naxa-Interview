import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { servicesAction } from "../../store/servicesAction";
import Layout from "../Layout/layout";
import Service from "./Service";

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(servicesAction());
  }, []);
  const naxaServices = useSelector((state) => {
    return state.services;
  }).sort((a, b) => a.service_order - b.service_order);

  return (
    <Layout>
      <section
        className="banner service-banner md-banner xxl: h-[520px] bg-heroBackground bg-no-repeat bg-contain	bg-right bg-[#fff] relative"
        // className='background: url("/5f2e7ab4fc673af02b45eed51bf5cb5e.jpg");'
      >
        <div className="flex justify-center items-center h-full w-full absolute inset-x-0 bottom-0 top-[30px] xxl:top-[45px] ">
          <div className="max-w-[90%] w-full px-[15px] mx-auto">
            <div className="max-w-[78%]">
              <h2 className="uppercase text-[#ffab00] xxl:text-[13px] text-[17px] font-semibold mb-[25px]">
                SERVICES
              </h2>
              <h1 className="text-[#333132] text-[56px] xxl:text-[40px] leading-none">
                At <span className="text-naxaBlue">NAXA</span>, we work on{" "}
                <span className="text-naxaBlue">ideas</span>; ideas that can
                provide <span className="text-naxaBlue">simple solutions</span>{" "}
                to <span className="text-naxaBlue">complex problems</span>.
              </h1>
              <p className="text-[#333132] text-[1.125rem] leading-8 font-semibold mt-10 max-w-screen-md">
                We work as a team to generate, explore, build and validate
                ideas. We also contextualize innovations around the world to
                find the best fitting solutions to local problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {naxaServices.map((element) => {
        return <Service data={element} key={element.id} />;
      })}
    </Layout>
  );
};

export default Services;
