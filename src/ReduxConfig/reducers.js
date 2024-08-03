import { combineReducers } from "redux";
const rootReducer = combineReducers({
  dados: (state = {}, action) => {
    switch (action.type) {
      case "SET_DADOS":
        return {
          ...state,
          dados: action.dados,
        };
      default:
        return state;
    }
  },
});

export default rootReducer;
