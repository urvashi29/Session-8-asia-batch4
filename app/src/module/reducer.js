import * as actions from "./actionType";

//central storage (store state)
const initState = {
  recipes: [],
  modal: false
};

const reducer = (state = initState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case actions.GET_RECIPE_DATA:
      return { ...state, recipes: action.payload };

    case actions.OPEN_MODAL:
      return {...state, modal: action.payload}
  }
  return state;
};

export default reducer;
