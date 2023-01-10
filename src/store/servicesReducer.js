import { set_NAXA_SERVICES } from "./constant";

export const serviesData = (data = [], action) => {
  switch (action.type) {
    case set_NAXA_SERVICES:
      console.log("Services of Naxa", action.data);
      return action.data;
    default:
      return data;
  }
};
