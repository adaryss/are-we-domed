import { fetchAsteroidsReducer } from './fetchAsteroidsReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	asteroids: fetchAsteroidsReducer,
});

export default rootReducer;