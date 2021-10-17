import asteroidsReducer from '../features/asteroidsSlice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	asteroids: asteroidsReducer,
});

export default rootReducer;