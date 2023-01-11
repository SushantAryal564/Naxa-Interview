import { Fragment } from "react";
const Service = ({ data }) => {
  const ordering = data.service_order % 2 === 0;
  const isIcon = data.icon.includes(".svg");
  return (
    <div className="max-w-[90%] w-full px-4 mx-auto ">
      <div className="mt-20 relative z-[1]">
        <div
          className={`grid grid-cols-2 justify-center content-center mx-[-15px]`}
        >
          {!ordering ? (
            <Fragment>
              <div className="max-w-[50%] justify-self-center px-[15px]">
                <figure className="h-full flex items-center justify-center mb-[1rem]">
                  <img
                    src={data.icon}
                    className={`${
                      isIcon ? "w-96 scale-150" : "w-full scale-150"
                    }`}
                  />
                </figure>
              </div>
              <div className="flex px-[15px] flex-col content-center">
                <figure className="mb-6">
                  <img
                    src={data.photo}
                    alt
                    className="max-w-[65px] max-h-[65px]"
                  />
                </figure>
                <h3 className="font-semibold text-2xl mb-7">{data.title}</h3>
                <div>
                  <p className="text-base">
                    {data.description1.replace(/<\/?p[^>]*>/g, "")}
                  </p>
                </div>
                <div className="mt-10 font-normal text-base  leading-7	 mb-12 bg-[#e9ebff] p-6">
                  <p>{data.description2.replace(/<\/?p[^>]*>/g, "")}</p>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="flex px-[15px] flex-col content-center">
                <figure className="mb-6">
                  <img
                    src={data.photo}
                    alt
                    className="max-w-[65px] max-h-[65px]"
                  />
                </figure>
                <h3 className="font-semibold text-2xl mb-7">{data.title}</h3>
                <div>
                  <p className="text-base">
                    {data.description1.replace(/<\/?p[^>]*>/g, "")}
                  </p>
                </div>
                <div className="mt-10 font-normal text-base  leading-7	 mb-12 bg-[#e9ebff] p-6">
                  <p>{data.description2.replace(/<\/?p[^>]*>/g, "")}</p>
                </div>
              </div>
              <div className="max-w-[50%] justify-self-center px-[15px]">
                <figure className="h-full flex items-center justify-center mb-[1rem]">
                  <img
                    src={data.icon}
                    className={`${isIcon ? "w-96" : "w-full scale-150"}`}
                  />
                </figure>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
