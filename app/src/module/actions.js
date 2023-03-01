import * as actions from "./actionType";
import data from "./Recipe/data.json";

export const getRecipes = () => {
  // console.log(data);
  return {
    type: actions.GET_RECIPE_DATA,
    payload: data,
  };
};

export const setModal = (val) => {
  return {
    type: actions.OPEN_MODAL,
    payload: val,
  };
};
