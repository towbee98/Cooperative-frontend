import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import dataReducer from "./data/data.reducer";

export default combineReducers({
  user: userReducer,
  data: dataReducer
});
