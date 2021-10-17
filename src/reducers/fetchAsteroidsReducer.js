import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	isFetching: false,
	error: null,
	asteroidsData: null,
};

export const fetchAsteroidsTypes = {
	ASTEROIDS_IS_FETCHING: 'ASTEROIDS_IS_FETCHING',
	ASTEROIDS_FETCH_ERROR: 'ASTEROIDS_FETCH_ERROR',
	ASTEROIDS_HAS_FETCHED: 'ASTEROIDS_HAS_FETCHED',
};

export const fetchAsteroidsReducer = createReducer(initialState, {
	[fetchAsteroidsTypes.ASTEROIDS_IS_FETCHING]: (state, action) => {
		state.isFetching = action.payload;
		return state;
	},
	[fetchAsteroidsTypes.ASTEROIDS_FETCH_ERROR]: (state, action) => {
		state.isFetching = false;
		state.error = action.payload;
		return state;
	},
	[fetchAsteroidsTypes.ASTEROIDS_HAS_FETCHED]: (state, action) => {
		state.isFetching = action.payload.isFetching;
		state.asteroidsData = action.payload.data;
		return state;
	}
})
