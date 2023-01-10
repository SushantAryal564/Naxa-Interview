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

  return <div></div>;
};

export default Services;
