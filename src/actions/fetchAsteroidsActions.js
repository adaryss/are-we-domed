import { createAction } from "@reduxjs/toolkit";
import { fetchAsteroidsTypes } from "../reducers/fetchAsteroidsReducer";

export const asteroidsFetching = createAction(fetchAsteroidsTypes.ASTEROIDS_IS_FETCHING);
export const asteroidsFetchingError = createAction(fetchAsteroidsTypes.ASTEROIDS_FETCH_ERROR);
export const asteroidsHasFetched = createAction(fetchAsteroidsTypes.ASTEROIDS_HAS_FETCHED);