import { SET_NAXA_SERVICES } from "./constant";

export const serviesData = (data = [], action) => {
  switch (action.type) {
    case SET_NAXA_SERVICES:
      return action.data;
    default:
      return data;
  }
};
