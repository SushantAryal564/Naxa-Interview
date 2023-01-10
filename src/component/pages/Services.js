import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { servicesAction } from "../../store/servicesAction";

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(servicesAction());
  }, []);
  const naxaServices = useSelector((state) => {
    return state.services;
  });
  console.log(naxaServices);

  return (
    <div>
      <div className="px-4 mx-auto"> Hi My name is sushant Aryal</div>
    </div>
  );
};

export default Services;
