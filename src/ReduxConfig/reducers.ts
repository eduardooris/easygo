import { combineReducers } from "redux";

enum ActionTypes {
  SET_USER = "SET_USER",
  SET_AUTH = "SET_AUTH",
}

const initialState = {
  isAuth: false,
  user: {},
};

const rootReducer = combineReducers({
  dados: (state: typeof initialState = initialState, action) => {
    switch (action.type) {
      case ActionTypes.SET_USER:
        return {
          ...state,
          user: action.payload,
          isAuth: true,
        };
      default:
        return state;
    }
  },
});

export default rootReducer;
