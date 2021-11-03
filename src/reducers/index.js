import asteroidsReducer from '../features/asteroidsSlice';
import langSlice from '../features/langSlice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	asteroids: asteroidsReducer,
	lang: langSlice,
});

export default rootReducer;