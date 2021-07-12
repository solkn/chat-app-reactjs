import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import messageReducer from "./message/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  message:messageReducer,

});

export default rootReducer;

