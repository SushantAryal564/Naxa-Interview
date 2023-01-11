import React from "react";
import * as Scroll from "react-scroll";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { servicesAction } from "../../store/servicesAction";
import Layout from "../Layout/layout";
import Service from "./Service";
import { MainNavigation } from "../Layout/MainNavigation";

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(servicesAction());
  }, []);

  const naxaServices = useSelector((state) => {
    return state.services;
  }).sort((a, b) => a.service_order - b.service_order);

  let naxaServicesTitle = [];
  naxaServices.forEach((element) => {
    let title = element.title;
    naxaServicesTitle.push(title);
  });

  return (
    <Layout>
      <section className="banner service-banner md-banner xxl: h-[520px] bg-heroBackground bg-no-repeat bg-contain	bg-right bg-[#fff] relative">
        <MainNavigation />
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
        <div className="w-full absolute flex justify-center bottom-[-30px]">
          <div className=" max-w-[90%] flex justify-between z-50 shadow-xl bg-white gap-2 p-1">
            {naxaServicesTitle.map((element, id) => {
              return (
                <Scroll.Link
                  className="w-[13%] self-center cursor-pointer"
                  to={element}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={id < 2 ? 800 : id > 1 && id < 5 ? 1800 : 2500}
                  isDynamic={true}
                >
                  {element}
                </Scroll.Link>
              );
            })}
          </div>
        </div>
      </section>
      <div className="pb-16">
        {naxaServices.map((element) => {
          return <Service data={element} key={element.id} />;
        })}
      </div>
    </Layout>
  );
};

export default Services;
